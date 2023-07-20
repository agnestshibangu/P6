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

// étape 2

// 7 best movies all categories 
async function SearchSevenBestRatedMovie() {
    const url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
    const url2 = "http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score";
    const response = await fetch(url);
    const response2 = await fetch(url2);
    const movies = await response.json();
    const movies2 = await response2.json();
    let idList = [];

    for (let i = 0; i < movies.results.length; i++) {
        idList.push(movies.results[i].id);
    }

    for (let i = 0; i < 2; i++) {
        idList.push(movies2.results[i].id);
    }

    console.log(idList);

    return idList;
}


// 7 best movies category BIOGRAPHY 
async function SearchSevenBestRatedMovieCat1() {
    const url = "http://localhost:8000/api/v1/titles/?genre=biography&sort_by=-imdb_score";
    const url2 = "http://localhost:8000/api/v1/titles/?genre=biography&page=2&sort_by=-imdb_score";
    const response = await fetch(url);
    const response2 = await fetch(url2);
    const movies = await response.json();
    const movies2 = await response2.json();
    let idListCat1 = [];

    for (let i = 0; i < movies.results.length; i++) {
        idListCat1.push(movies.results[i].id);
    }
    for (let i = 0; i < 2; i++) {
        idListCat1.push(movies2.results[i].id);
    }

    console.log(idListCat1);

    return idListCat1;
}

// 7 best movies category MUSIC
async function SearchSevenBestRatedMovieCat2() {
    const url = "http://localhost:8000/api/v1/titles/?genre=Music&sort_by=-imdb_score";
    const url2 = "http://localhost:8000/api/v1/titles/?genre=Music&page=2&sort_by=-imdb_score";
    const response = await fetch(url);
    const response2 = await fetch(url2);
    const movies = await response.json();
    const movies2 = await response2.json();
    let idListCat2 = [];

    
    for (let i = 0; i < movies.results.length; i++) {
        idListCat2.push(movies.results[i].id);
    }
    for (let i = 0; i < 2; i++) {
        idListCat2.push(movies2.results[i].id);
    }

    console.log(idListCat2);

    return idListCat2;
}

// 7 best movies category THRILLER
async function SearchSevenBestRatedMovieCat3() {
    const url = "http://localhost:8000/api/v1/titles/?genre=Thriller&sort_by=-imdb_score";
    const url2 = "http://localhost:8000/api/v1/titles/?genre=Thriller&page=2&sort_by=-imdb_score";
    const response = await fetch(url);
    const response2 = await fetch(url2);
    const movies = await response.json();
    const movies2 = await response2.json();
    let idListCat3 = [];

    
    for (let i = 0; i < movies.results.length; i++) {
        idListCat3.push(movies.results[i].id);
    }
    for (let i = 0; i < 2; i++) {
        idListCat3.push(movies2.results[i].id);
    }

    console.log(idListCat3);

    return idListCat3;
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
    console.log(movie.image_url);
    
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
    const imageUrl = movie.image_url;
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



    console.log(imageUrl)
    // // // Update the HTML elements with movie details
    // document.getElementById("title-other-movies-" + [positionNumber]).innerText = title;
    document.getElementById("imgimg-"+ [positionNumber]).src = imageUrl;
    

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
        fetchMovieDetails();
    } catch (error) {
        console.error(error);
    }
}




async function searchAndProcessMovies() {

    // 7 meilleurs films
    try {
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

    // 7 meilleurs Cat1
    try {
        const idListCat1 = await SearchSevenBestRatedMovieCat1();
        console.log(idListCat1);
        for (let i = 0; i < idListCat1.length; i++)
        {
            let currentId = idListCat1[i];
            let positionNumber = i + 7;
            fetchMovieDetailsForCategories(currentId, positionNumber);
        }
       
    } catch (error) {
        console.error(error);
    }

     // 7 meilleurs Cat2
     try {
        const idListCat2 = await SearchSevenBestRatedMovieCat2();
        console.log(idListCat2);
        for (let i = 0; i < idListCat2.length; i++)
        {
            let currentId = idListCat2[i];
            let positionNumber = i + 14;
            fetchMovieDetailsForCategories(currentId, positionNumber);
        }
       
    } catch (error) {
        console.error(error);
    }

      // 7 meilleurs Cat3
      try {
        const idListCat3 = await SearchSevenBestRatedMovieCat3();
        console.log(idListCat3);
        for (let i = 0; i < idListCat3.length; i++)
        {
            let currentId = idListCat3[i];
            let positionNumber = i + 21;
            fetchMovieDetailsForCategories(currentId, positionNumber);
        }
       
    } catch (error) {
        console.error(error);
    }
}

// Call the searchAndProcessMovie function
searchAndProcessSingleMovie() 

searchAndProcessMovies()


























