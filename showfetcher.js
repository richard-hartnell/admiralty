let sampleImage = '/images/music/librarians.webp';
let sampleName = 'The Librarians';
let sampleDate = 'Tuesday, September 10';
let sampleTime = '7p - 9p';
let sampleDescription = 'Surreal & engaging jazzy post-neo psychedelic dream folk soundscapes.';
let sampleAltText = 'A foursome of experienced-looking musicians standing, shoulder-to-shoulder.';

const template = `
<figure class="show">
    <img class="show-pic" src="${sampleImage}" loading="lazy" alt="${sampleAltText}" />
    <figcaption class="show-info">
        <section class="music-bio">
            <h2>${sampleName}</h2>
            <h6>${sampleDescription}</h6>
        </section>
        <section class="showtime">
            <h6>${sampleDate}<br>${sampleTime}</h6>
        </section>
    </figcaption>
</figure>
`

console.log(template);