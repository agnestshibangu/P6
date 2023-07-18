// étape 1
// retourne le film le mieux noté toutes catégories confondues

// étape 2
// 7 autres meilleurs films toutes catégories confondues

// étape 3
// 7 films les mieux notés d'une catégorie

// étape 4
// 7 films les mieux notés d'une catégorie

// étape 5
// 7 films les mieux notés d'une catégorie








// étape 1
// retourne le film le mieux noté toutes catégories confondues

async function GetMovieId() {
    const url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
    const response = await fetch(url);
    const movies = await response.json();
    console.log(movies.results[0].id)
    let id = movies.results[0].id

    return id;
}

// étape 2
// 7 autres meilleurs films toutes catégories confondues

async function SearchSevenBestRatedMovie() {
    const url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
    const response = await fetch(url);
    const movies = await response.json();
    let idList = [];

    for (let i = 0; i < movies.results.length; i++) {
        idList.push(movies.results[i].id);
        console.log(idList);
    }

    console.log(idList);

    return idList;
}



// étape 3
// 7 films les mieux notés d'une catégorie

// étape 4
// 7 films les mieux notés d'une catégorie

// étape 5
// 7 films les mieux notés d'une catégorie

async function fetchBestMovieDetails(id) {

    const url = "http://localhost:8000/api/v1/titles/" + id;
    const response = await fetch(url);
    const movie = await response.json();
    //console.log(movie);
    // console.log(movie.title);
    // console.log(movie.image_url);
    // console.log(movie.genres);
    // console.log(movie.date_published);
    // console.log(movie.rated);
    // console.log(movie.imdb_score);
    // console.log(movie.directors);
    // console.log(movie.actors);
    // console.log(movie.duration);
    // console.log(movie.countries);
    // console.log(movie.description);


    // Retrieve the desired movie details
    const title = movie.title;
    const ImageUrl = movie.image_url;
    const genres = movie.genres;
    const date_published = movie.date_published;
    const rated = movie.rated;
    const imdb_score = movie.imdb_score;
    const directors = movie.directors;
    const actors = movie.actors;
    const duration = movie.duration;
    const countries = movie.countries;
    const description = movie.description;


    // // Update the HTML elements with movie details

    document.getElementById("bestRatedMovies-img").src = ImageUrl;
    // document.getElementById("bestRatedMovies-title").innerText = title;
    // document.getElementById("bestRatedMovies-description").innerText = description;

}




async function fetchMovieDetails(id) {

    const url = "http://localhost:8000/api/v1/titles/" + id;
    const response = await fetch(url);
    const movie = await response.json();
    //console.log(movie);
    // console.log(movie.title);
    // console.log(movie.image_url);
    // console.log(movie.genres);
    // console.log(movie.date_published);
    // console.log(movie.rated);
    // console.log(movie.imdb_score);
    // console.log(movie.directors);
    // console.log(movie.actors);
    // console.log(movie.duration);
    // console.log(movie.countries);
    // console.log(movie.description);


    // Retrieve the desired movie details
    const title = movie.title;
    const ImageUrl = movie.image_url;
    const genres = movie.genres;
    const date_published = movie.date_published;
    const rated = movie.rated;
    const imdb_score = movie.imdb_score;
    const directors = movie.directors;
    const actors = movie.actors;
    const duration = movie.duration;
    const countries = movie.countries;
    const description = movie.description;


    // // Update the HTML elements with movie details
    document.getElementById("bestRatedMovies-title").innerText = title;
    document.getElementById("bestRatedMovies-img").src = ImageUrl;
    document.getElementById("bestRatedMovies-description").innerText = description;

}






// Define another function that uses the id as a parameter
function someOtherFunction(id) {
    // Use the id parameter in your logic
    console.log("The best rated movie id is: " + id);
}

// Call the SearchBestRatedMovie single best movie 
async function searchAndProcessMovie() {
    try {
        const id = await GetMovieId();
        fetchMovieDetails(id);
    } catch (error) {
        console.error(error);
    }
}

async function searchAndProcessSevenMovies() {
    try {
        const idList = await SearchSevenBestRatedMovie();
        console.log(idList);
        for (let i = 0; i < idList.length; i++)
        {
            let currentId = idList[i];
            console.log(currentId);
            fetchMovieDetails(currentId);
        }
       
    } catch (error) {
        console.error(error);
    }
}

// Call the searchAndProcessMovie function
searchAndProcessMovie();

// searchAndProcessSevenMovies()


























