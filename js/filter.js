let lang = "tr"
let year = 2024

function filter() {
    lang = document.getElementById('Language').value
    year = document.getElementById('Year').value
    console.log(lang)
    console.log(year)
}


// API Request
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDE3YjNiMGQ2NzI1NGVkNGZjNWEzMmQyMTViNjZjOCIsInN1YiI6IjY2NGY2Y2IzOTA4ODMxMzc5MDk1NDJiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aB1tx4fxNGSWdmmk_lVNWN1Jfz-l_EqlvUzNbBLtvSw'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?with_original_language=${lang}&year=${year}', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

console.log(String(year))
console.log(lang)