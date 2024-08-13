let sampleImage = '/images/music/librarians.webp';
let sampleName = 'The Librarians';
let sampleDate = 'Tuesday, September 10';
let sampleTime = '7p - 9p';
let sampleDescription = 'Surreal & engaging jazzy post-neo psychedelic dream folk soundscapes.';
let sampleAltText = 'A foursome of experienced-looking musicians standing, shoulder-to-shoulder.';
let lazyTag = 'loading="lazy"';

const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsA8WweuIqAmaLf9oY38_ezsd_LCOrgTrGEh7eXQBy91d2xwD-NqBlFdc6GvBkay8ZgRCWbwzjHAZM/pub?output=csv';
let rows = [];

function fetchShowSheet(url) {
    fetch(url)
    .then(response => response.text())
    .then(data => {
        // Parse the CSV data
        rows = data.split('\n').map(row => row.split(','));
        
        // Now you can work with the rows
        // console.log(rows);
    })
    .catch(error => console.error('Error fetching the Google Sheet:', error));
}

const allShows = [];

const showTemplate = `
<figure class="show">
    <img class="show-pic" src="${sampleImage}" ${lazyTag} alt="${sampleAltText}" />
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
`;

const showSection = `
<h1>MUSIC</h1>
${allShows.join('\n')};
<!-- <figure class="soon">
          <br>
          <h3>A L S O</h3><br>
          <h4>The White Ducks</h4>
          <h5>August 20</h5><br>
        </figure> -->

        <figure class="previously">
          <h3>P R E V I O U S L Y</h3>
          <h5>
          Raggedly Adler<br>
          Brooke Bates<br>
          Tad Kroening<br>
          Ludlings<br>
          Towse<br>
          Channing Waage<br>
          Matney Cook<br>
          Ivan Sandomire<br>
          Roger Thorne<br>
          Shannon Patiño<br>
          Louis Ledford<br>
          Norah McLaughlin<br>
          Cullen Gray<br>
          Morgan McHugh<br>
          Pete Irving & Mickey Stylin<br>
          Tenderpile's Smile Aisle</br>
          Lucas Warford<br>
          Free Harmony<br>
          Sarah Goodin<br>
          Sam Chue<br>
          Chuck and Carr<br>
          The House Wrens<br>
          Octavia McAloon<br>
          David Donohue<br>
          Ron Hardesty<br>
          Paige Woods<br>
          The Moving Hats<br>
          Blue Collar Grass Band<br>
          Emily Freudenberger<br>
          Badd Dogg Howl-O-Ween<br>
          Russell Thompson</h5>
        </figure>
`
// console.log(template);