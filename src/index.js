const key = "48727053";
const movie = "star wars"
const url = `https://www.omdbapi.com/?s=${movie}&apikey=${key}`;



const insertMovieToTheDom = (title, poster) => {
  const results = document.querySelector("ul#results");
  const movieHTML = `
    <li>
      <p>${title}</p>
      <img src="${poster}" alt=""
    </li>
  `
  results.insertAdjacentHTML("beforeend", movieHTML);
}

// JavaScript gets the URL
fetch(url)
  // we receive a response which is text and return it transformed into a JS object (JSON)
  .then((response) => response.json())
  // data is the name we give to the json
  .then((data) => {
    const movies = data.Search;
    movies.forEach((movie) => {
      const title = movie.Title;
      const poster = movie.Poster;
      insertMovieToTheDom(title, poster);
    })
  });

