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

// async function GetMovieId() {
//     const url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
//     const response = await fetch(url);
//     const movies = await response.json();
//     console.log(movies.results[0].id)
//     let id = movies.results[0].id

//     return id;
// }

// étape 2
// 7 autres meilleurs films toutes catégories confondues

async function SearchSevenBestRatedMovie() {
    const url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
    const response = await fetch(url);
    const movies = await response.json();
    let idList = [];

    for (let i = 0; i < movies.results.length; i++) {
        idList.push(movies.results[i].id);
        console.log(i);
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


// fetch data for the best movie
async function fetchMovieDetails() {

    const url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"
    const response = await fetch(url);
    const movies = await response.json();
    console.log(movies);
    const movie = movies.results[0]
    console.log(movie.title);
    //console.log(movie.description);
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
    document.getElementById("title-movie-0").innerText = title;
    document.getElementById("big-div-img-0").src = ImageUrl;
    // document.getElementById("description-movie-0").innerText = description;

}


async function fetchMovieDetailsForCategories(currentId, positionNumber) {

    console.log(positionNumber);
    console.log(currentId);


    let url = "http://localhost:8000/api/v1/titles/" + currentId;
    console.log(url);
    let response = await fetch(url);
    let movie = await response.json();

    console.log(movie);
    console.log(movie.title);
    
    




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


    // // Retrieve the desired movie details
    // const title = movie.title;
    // const ImageUrl = movie.image_url;
    // const genres = movie.genres;
    // const date_published = movie.date_published;
    // const rated = movie.rated;
    // const imdb_score = movie.imdb_score;
    // const directors = movie.directors;
    // const actors = movie.actors;
    // const duration = movie.duration;
    // const countries = movie.countries;
    // const description = movie.description;

    // // console.log(positionNumber);
    
    // // Single best movie
    // if (positionNumber == 0) {
    //     document.getElementById("title-other-movies-" + [positionNumber]).innerText = title;
    //     document.getElementById("imgimg-" + [positionNumber]).src = ImageUrl;
    // }



    
    // // // Update the HTML elements with movie details
    // document.getElementById("title-other-movies-" + [positionNumber]).innerText = title;
    // document.getElementById("imgimg-" + [positionNumber]).src = ImageUrl;
    // document.getElementById("bestRatedMovies-description").innerText = description;

}




// Define another function that uses the id as a parameter
function someOtherFunction(id) {
    // Use the id parameter in your logic
    console.log("The best rated movie id is: " + id);
}

// Fetch data for single best movies
async function searchAndProcessSingleMovie() {
    try {
        // const id = await GetMovieId();
        //   fetchMovieDetails(id);
        fetchMovieDetails();
    } catch (error) {
        console.error(error);
    }
}

async function searchAndProcessMovies() {
    try {
        // meilleur film
        const singleMovie = await fetchBestMovieDetails(id);
        
        // 7 meilleurs films

        // 7 meilleurs films cat1

        // 7 meilleurs films cat2
        
       
        const idList = await SearchSevenBestRatedMovie();
        console.log(idList);
        for (let i = 0; i < idList.length; i++)
        {
            let currentId = idList[i];
            let positionNumber = i;
            fetchMovieDetailsForCategories(currentId, positionNumber);
        }
       
    } catch (error) {
        console.error(error);
    }
}

// Call the searchAndProcessMovie function
searchAndProcessSingleMovie() 

searchAndProcessMovies()


























