const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsA8WweuIqAmaLf9oY38_ezsd_LCOrgTrGEh7eXQBy91d2xwD-NqBlFdc6GvBkay8ZgRCWbwzjHAZM/pub?output=csv';
let rows = [];
let counter = 0;
let lazy = false;
let allShows = [];
let showSection = '';

function addShow(show, lazy) {
    let showName = show[0];
    let showWeekday = show[1];
    let showTime = show[2];
    let showDate = show[3];
    let showDesc = show[4];
    let showImage = show[5];
    let showAltText = show[6];
    let lazyTag = '';
    if (lazy) {
        lazyTag = 'loading="lazy"';
    }

    let showTemplate = `
    <article>
        <a href="#" class="image"><img src="images/music/${showImage}" ${lazyTag} alt="${showAltText}" /></a>
        <h3 class="major">${showName}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
        <a href="#" class="special">Learn more</a>
    </article>
    `;

    // let showTemplate = `
    //     <figure class="show">
    //         <img class="show-pic" src="/images/music/${showImage}" ${lazyTag} alt="${showAltText}" />
    //         <figcaption class="show-info">
    //             <section class="music-bio">
    //                 <h2>${showName}</h2>
    //                 <h6>${showDesc}</h6>
    //             </section>
    //             <section class="showtime">
    //                 <h6>${showWeekday}, ${showDate}<br>${showTime}</h6>
    //             </section>
    //         </figcaption>
    //     </figure>
    // `;
    allShows.push(showTemplate);
}

function fetchShowSheet(url) {
    fetch(url)
    .then(response => response.text())
    .then(data => {
        Papa.parse(data, {
            complete: function(results) {
                rows = results.data;
                for (let show of rows) {
                    if (counter > 3 && !lazy) {
                        lazy = true;
                    }
                    if (show[7] && show[7].trim() === 'TRUE') {
                        addShow(show, lazy);
                    }
                    counter++;
                }

                showSection = `
                <h1>MUSIC</h1>
                ${allShows.join('\n')}
                `;

                document.getElementById('music-wrapper').innerHTML = showSection;
            }
        });
    })
    .catch(error => console.error('Error fetching the Google Sheet:', error));
}

fetchShowSheet(url);