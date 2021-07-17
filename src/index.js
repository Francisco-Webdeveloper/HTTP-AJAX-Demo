
// STEP 3
const insertMovieToTheDom = (title, poster) => {
  const results = document.querySelector("ul#results");
  const movieHTML = `
    <li>
      <p>${title}</p>
      <img src="${poster}" alt=""
    </li>
  `;
  results.insertAdjacentHTML("beforeend", movieHTML);
}

// STEP2
const fetchAPI = (movie) => {
  const key = "48727053";
  const url = `https://www.omdbapi.com/?s=${movie}&apikey=${key}`;

  // JavaScript gets the URL
  fetch(url)
    // we receive a response which is text and return it transformed into a JS object (JSON)
    .then((response) => response.json())
    // data is the name we give to the json
    .then((data) => {
      const movies = data.Search;

      // before inserting, empty the UL (to avoid adding results)
      const results = document.querySelector("ul#results");
      results.innerHTML = "";

      // for each movie, insert it to the DOM
      movies.forEach((movie) => {
        const title = movie.Title;
        const poster = movie.Poster;
        insertMovieToTheDom(title, poster);
      })
    });
}

//STEP 1
// find the form with id search-movies
const form = document.getElementById("search-movies");
// on this form we will add an event listener
form.addEventListener("submit", (event) => {
// when the event happens, we want to fetch the API
  // prevent from reloading the page
  event.preventDefault();
  // find the input value
  const input = document.getElementById("keyword");
  const searchedMovie = input.value;
  fetchAPI(searchedMovie);
})

