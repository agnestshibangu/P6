

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
    // const movieImage = movie.
    // const movieGenre = movie.genres[0];
    const movieYear = movie.year;
    const movieRate = movie.rated;
    const movieLmbd = movie.imbd_score;
    // const movieDirector = movie.director[0];
    // const movieActors = movie.actors[0];
    const movieDuration = movie.duration; 
    const movieOrigin = movie.countries;
    const movieSummary = movie.description; 

   
    const title = document.getElementById("title-movie-big-div");
    // const genre = document.getElementById("modal-genre-big-div");
    const year = document.getElementById("modal-year-big-div");
    const rated  = document.getElementById("modal-rated-big-div");
    const lmbd = document.getElementById("modal-score-lmdb-big-div");
    // const director = document.getElementById("modal-director-big-div");
    // const actor = document.getElementById("modal-actor-list-big-div");
    const duration = document.getElementById("modal-duration-big-div");
    const origin = document.getElementById("modal-country-origin-big-div");
    const boxOfficeResult = document.getElementById("modal-box-office-result-big-div");
    const summary = document.getElementById("modal-actor-summary-big-div");

    document.getElementById("modal-inner-img").src = imageUrl;
   
    title.innerText = movieTitle;
    year.innerText = movieYear;
    rated.innerText = movieRate;
    lmbd.innerText = movieLmbd;

    console.log(movieImage);
    // director.innerText = movieDirector=
    // actor.innerText = movieActors;
    duration.innerText = movieDuration;
    origin.innerText = movieOrigin;
    summary.innerText = movieSummary;


}

function hello() {
    console.log('ogkreopkr');
}

function closeModal() {
    console.log("close");
    document.getElementById("main-blur-screen").style.display = 'none';
}

function displayIdSpan() {
    const elements = document.getElementsByClassName("idSpan");
    for (let i = 0; i < elements.length; i++) {
      console.log(elements[0].innerHTML);
    } 
}

displayIdSpan();

