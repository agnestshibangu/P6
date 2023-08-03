
async function openModal(currentId) {
    console.log("open");
    console.log(currentId);
    document.getElementById("main-blur-screen").style.display = 'block';

    let url = "http://localhost:8000/api/v1/titles/" + currentId;
    console.log(url);
    let response = await fetch(url);
    let movie = await response.json();
    console.log(movie);
    
    const movieTitle = movie.title;
    const imageUrl = movie.image_url;
    const movieGenre = movie.genres;
    const movieYear = movie.year;
    const movieRate = movie.rated;
    const movieImbd = movie.imdb_score;
    const movieDuration = movie.duration; 
    const movieOrigin = movie.countries;
    const movieSummary = movie.description; 
    const movieDirector = movie.directors;
    const movieActor = movie.actors;
    const movieGrossIncome = movie.worldwide_gross_income;


   
    const genre = document.getElementById("modal-genre-big-div");
    const title = document.getElementById("title-movie-big-div-modal");
    const year = document.getElementById("modal-year-big-div");
    const rated  = document.getElementById("modal-rated-big-div");
    const imbd = document.getElementById("modal-score-imdb-big-div");
    const directors = document.getElementById("modal-director-big-div");
    const actors = document.getElementById("modal-actor-list-big-div");
    const duration = document.getElementById("modal-duration-big-div");
    const origin = document.getElementById("modal-country-origin-big-div");
    const boxOfficeResult = document.getElementById("modal-box-office-result-big-div");
    const summary = document.getElementById("modal-actor-summary-big-div");

    document.getElementById("modal-inner-img").src = imageUrl;
   
    title.innerText = movieTitle;
    
    rated.innerText = "rated : " + movieRate;
    genre.innerText = "genre : " + movieGenre; 
    year.innerText = "year : " + movieYear;
    imbd.innerText = "imbd score : " + movieImbd;
    directors.innerText = "director : " + movieDirector;
    actors.innerText = "actors : " + movieActor;
    duration.innerText = "duration : " + movieDuration + " mins";
    origin.innerText = "country : " + movieOrigin;
    boxOfficeResult.innerText = "result box office : " + movieGrossIncome;
    summary.innerText = "summary : " + movieSummary;


}

function closeModal() {
    document.getElementById("main-blur-screen").style.display = 'none';
}

function displayIdSpan() {
    const elements = document.getElementsByClassName("idSpan");
    for (let i = 0; i < elements.length; i++) {
      console.log(elements[0].innerHTML);
    } 
}

displayIdSpan();

