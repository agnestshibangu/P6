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

    // console.log(idList);

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

    // console.log(idListCat2);

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

    const movie = movies.results[0]
    // console.log(movie.title);
    // console.log(movie.image_url);
    // console.log(movie.genres[0]);
    // console.log(movie.year);
    // console.log(movie.votes);
    // console.log(movie.directors);
    // console.log(movie.actors);
    // console.log(movie.duration);
    // console.log(movie.countries);


    // Retrieve the desired movie details
    const title = movie.title;
    const ImageUrl = movie.image_url;
    const genres = movie.genres[0];
    const year = movie.year;
    const rated = movie.rated;
    const imdb_score = movie.imdb_score;
    const directors = movie.directors;
    const actors = movie.actors;
    const duration = movie.duration;
    const countries = movie.countries;
    const description = movie.description;


    // // Update the HTML elements with movie details
    document.getElementById("title-movie-big-div").innerText = title;
    document.getElementById("big-div-img-0").src = ImageUrl;
    document.getElementById("modal-genre-big-div").innerText = genres;
    document.getElementById("modal-year-big-div").innerText = year;
    // document.getElementById("description-movie-big-div").innerText = description;

}


function addModalToDOM() {

    const moviesContainer = document.getElementById("movies-container");


    const movieDiv = document.createElement("div");
    const movieImage = document.createElement("img");
    const movieTitle = document.createElement("h2");
    const movieButton = document.createElement("button");

    
    movieTitle.textContent = "add modal title";
    movieButton.textContent = "Voir les détails";

    movieDiv.appendChild(movieTitle);
    movieDiv.appendChild(movieButton);
    
    moviesContainer.appendChild(movieDiv);
}





function adddivToCaroussel() {

    const moviesContainerCat1 = document.getElementById("carousel__viewport_cat1");

    for (i = 0; i <= 6; i++) {    

        const cat1 = document.createElement("li");
        cat1.setAttribute("id", "carousel__slide" + i + "__cat1");
        cat1.setAttribute("tabindex", "0");
        cat1.setAttribute("tabindex", "0");
        cat1.classList.add('carousel__slide');

        const imgMovie = document.createElement("img");
        imgMovie.setAttribute("id", "imgimg-" + i);
        imgMovie.setAttribute("tabindex", "0");
        imgMovie.classList.add('carousel__slide');

        const divBoxInfos = document.createElement("div");
        divBoxInfos.setAttribute("class", "box-infos box-infos-cat");

        const divBoxBlack = document.createElement("div");
        divBoxBlack.setAttribute("class", "box-black-opacity-50");
    
        const boxDesc = document.createElement("div");
        boxDesc.setAttribute("class", "box-desc");

        const idSpan = document.createElement("h2");
        idSpan.setAttribute("id", "idSpan-" + i);
        idSpan.setAttribute("class", "idSpan");

        const title = document.createElement("h1");
        title.setAttribute("class", "title-movie");
        title.setAttribute("id", "title-movie-" + i);

        const btnMoreInfo = document.createElement("button");
        btnMoreInfo.textContent = 'More infos';
        btnMoreInfo.setAttribute("id", "btn-more-infos-" + i);
        btnMoreInfo.setAttribute("class", "btn-more-infos");

        const carousselSnapper = document.createElement("div");
        carousselSnapper.setAttribute("class", "carousel__snapper");
        const carousselLinkPrev = document.createElement("a");
        carousselLinkPrev.setAttribute("href", "#carousel__slide" + parseInt(i - 1) + "__cat1");
        carousselLinkPrev.setAttribute("class", "carousel__prev");
        const carousselLinkNext = document.createElement("a");
        carousselLinkNext.setAttribute("href", "#carousel__slide" + parseInt(i + 1) + "__cat1");
        carousselLinkNext.setAttribute("class", "carousel__next");

        // caroussel slide first and last logic
        //////

        carousselSnapper.appendChild(carousselLinkPrev);
        carousselSnapper.appendChild(carousselLinkNext);

        // creating the box infos element
       
        
        boxDesc.appendChild(title);
        divBoxBlack.appendChild(btnMoreInfo);
        boxDesc.appendChild(idSpan);
        divBoxBlack.appendChild(boxDesc);
        divBoxInfos.appendChild(divBoxBlack);

        cat1.appendChild(imgMovie);
        cat1.appendChild(divBoxInfos);
        cat1.appendChild(carousselSnapper);
        
        moviesContainerCat1.appendChild(cat1);
    }

    const moviesContainerCat2 = document.getElementById("carousel__viewport_cat2");

    for (i = 7; i <= 13; i++) {    

        const cat2 = document.createElement("li");
        cat2.setAttribute("id", "carousel__slide" + i + "__cat2");
        cat2.setAttribute("tabindex", "0");
        cat2.setAttribute("tabindex", "0");
        cat2.classList.add('carousel__slide');

        const imgMovie = document.createElement("img");
        imgMovie.setAttribute("id", "imgimg-" + i);
        imgMovie.setAttribute("tabindex", "0");
        imgMovie.classList.add('carousel__slide');

        const divBoxInfos = document.createElement("div");
        divBoxInfos.setAttribute("class", "box-infos box-infos-cat");

        const divBoxBlack = document.createElement("div");
        divBoxBlack.setAttribute("class", "box-black-opacity-50");
    
        const boxDesc = document.createElement("div");
        boxDesc.setAttribute("class", "box-desc");

        const idSpan = document.createElement("h2");
        idSpan.setAttribute("id", "idSpan-" + i);
        idSpan.setAttribute("class", "idSpan");

        const title = document.createElement("h1");
        title.setAttribute("class", "title-movie");
        title.setAttribute("id", "title-movie-" + i);

        const btnMoreInfo = document.createElement("button");
        btnMoreInfo.textContent = 'More infos';
        btnMoreInfo.setAttribute("id", "btn-more-infos-" + i);
        btnMoreInfo.setAttribute("class", "btn-more-infos");

        
        const carousselSnapper = document.createElement("div");
        carousselSnapper.setAttribute("class", "carousel__snapper");
        const carousselLinkPrev = document.createElement("a");
        carousselLinkPrev.setAttribute("href", "#carousel__slide" + parseInt(i - 1) + "__cat2");
        carousselLinkPrev.setAttribute("class", "carousel__prev");
        const carousselLinkNext = document.createElement("a");
        carousselLinkNext.setAttribute("href", "#carousel__slide" + parseInt(i + 1) + "__cat2");
        carousselLinkNext.setAttribute("class", "carousel__next");

        // caroussel slide first and last logic
        //////

        carousselSnapper.appendChild(carousselLinkPrev);
        carousselSnapper.appendChild(carousselLinkNext);

        // creating the box infos element

       
        boxDesc.appendChild(title);
        divBoxBlack.appendChild(btnMoreInfo);
        boxDesc.appendChild(idSpan);
        divBoxBlack.appendChild(boxDesc);
        divBoxInfos.appendChild(divBoxBlack);

        cat2.appendChild(imgMovie);
        cat2.appendChild(divBoxInfos);
        cat2.appendChild(carousselSnapper);
        
        moviesContainerCat2.appendChild(cat2);
    }

    const moviesContainerCat3 = document.getElementById("carousel__viewport_cat3");

    for (i = 14; i <=20; i++) {    

        const cat3 = document.createElement("li");
        cat3.setAttribute("id", "carousel__slide" + i + "__cat3");
        cat3.setAttribute("tabindex", "0");
        cat3.setAttribute("tabindex", "0");
        cat3.classList.add('carousel__slide');

        const imgMovie = document.createElement("img");
        imgMovie.setAttribute("id", "imgimg-" + i);
        imgMovie.setAttribute("tabindex", "0");
        imgMovie.classList.add('carousel__slide');

        const divBoxInfos = document.createElement("div");
        divBoxInfos.setAttribute("class", "box-infos box-infos-cat");

        const divBoxBlack = document.createElement("div");
        divBoxBlack.setAttribute("class", "box-black-opacity-50");
    
        const boxDesc = document.createElement("div");
        boxDesc.setAttribute("class", "box-desc");

        const idSpan = document.createElement("h2");
        idSpan.setAttribute("id", "idSpan-" + i);
        idSpan.setAttribute("class", "idSpan");

        const title = document.createElement("h1");
        title.setAttribute("class", "title-movie");
        title.setAttribute("id", "title-movie-" + i);

        const btnMoreInfo = document.createElement("button");
        btnMoreInfo.textContent = 'More infos';
        btnMoreInfo.setAttribute("id", "btn-more-infos-" + i);
        btnMoreInfo.setAttribute("class", "btn-more-infos");
        
        const carousselSnapper = document.createElement("div");
        carousselSnapper.setAttribute("class", "carousel__snapper");
        const carousselLinkPrev = document.createElement("a");
        carousselLinkPrev.setAttribute("href", "#carousel__slide" + parseInt(i - 1) + "__cat3");
        carousselLinkPrev.setAttribute("class", "carousel__prev");
        const carousselLinkNext = document.createElement("a");
        carousselLinkNext.setAttribute("href", "#carousel__slide" + parseInt(i + 1) + "__cat3");
        carousselLinkNext.setAttribute("class", "carousel__next");

        // caroussel slide first and last logic
        //////

        carousselSnapper.appendChild(carousselLinkPrev);
        carousselSnapper.appendChild(carousselLinkNext);

        // creating the box infos element

        divBoxBlack.appendChild(btnMoreInfo);
        boxDesc.appendChild(title);
        boxDesc.appendChild(idSpan);
        divBoxBlack.appendChild(boxDesc);
        divBoxInfos.appendChild(divBoxBlack);

        cat3.appendChild(imgMovie);
        cat3.appendChild(divBoxInfos);
        cat3.appendChild(carousselSnapper);
        
        moviesContainerCat3.appendChild(cat3);
    }

    const moviesContainerCat4 = document.getElementById("carousel__viewport_cat4");

    for (i = 21; i <=27; i++) {    

        const cat4 = document.createElement("li");
        cat4.setAttribute("id", "carousel__slide" + i + "__cat4");
        cat4.setAttribute("tabindex", "0");
        cat4.setAttribute("tabindex", "0");
        cat4.classList.add('carousel__slide');

        const imgMovie = document.createElement("img");
        imgMovie.setAttribute("id", "imgimg-" + i);
        imgMovie.setAttribute("tabindex", "0");
        imgMovie.classList.add('carousel__slide');

        const divBoxInfos = document.createElement("div");
        divBoxInfos.setAttribute("class", "box-infos box-infos-cat");

        const divBoxBlack = document.createElement("div");
        divBoxBlack.setAttribute("class", "box-black-opacity-50");
    
        const boxDesc = document.createElement("div");
        boxDesc.setAttribute("class", "box-desc");

        const idSpan = document.createElement("h2");
        idSpan.setAttribute("id", "idSpan-" + i);
        idSpan.setAttribute("class", "idSpan");

        const title = document.createElement("h1");
        title.setAttribute("class", "title-movie");
        title.setAttribute("id", "title-movie-" + i);

        const btnMoreInfo = document.createElement("button");
        btnMoreInfo.textContent = 'More infos';
        btnMoreInfo.setAttribute("id", "btn-more-infos-" + i);
        btnMoreInfo.setAttribute("class", "btn-more-infos");

        
        const carousselSnapper = document.createElement("div");
        carousselSnapper.setAttribute("class", "carousel__snapper");
        const carousselLinkPrev = document.createElement("a");
        carousselLinkPrev.setAttribute("href", "#carousel__slide" + parseInt(i - 1) + "__cat4");
        carousselLinkPrev.setAttribute("class", "carousel__prev");
        const carousselLinkNext = document.createElement("a");
        carousselLinkNext.setAttribute("href", "#carousel__slide" + parseInt(i + 1) + "__cat4");
        carousselLinkNext.setAttribute("class", "carousel__next");

        // caroussel slide first and last logic
        //////

        carousselSnapper.appendChild(carousselLinkPrev);
        carousselSnapper.appendChild(carousselLinkNext);

        // creating the box infos element
        
        boxDesc.appendChild(title);
        divBoxBlack.appendChild(btnMoreInfo);
        boxDesc.appendChild(idSpan);
        divBoxBlack.appendChild(boxDesc);
        divBoxInfos.appendChild(divBoxBlack);

        cat4.appendChild(imgMovie);
        cat4.appendChild(divBoxInfos);
        cat4.appendChild(carousselSnapper);
        
        moviesContainerCat4.appendChild(cat4);
    }

}

adddivToCaroussel();


async function fetchMovieDetailsForCategories(currentId, positionNumber) {

    // console.log(positionNumber);
    // console.log(currentId);

    let url = "http://localhost:8000/api/v1/titles/" + currentId;
    // console.log(url);
    let response = await fetch(url);
    let movie = await response.json();

    // console.log(movie);
    // console.log(movie.image_url);
    
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
    const title = movie.title;
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

    // console.log(imageUrl);
    // console.log(currentId);
    // // // Update the HTML elements with movie details
    document.getElementById("imgimg-"+ [positionNumber]).src = imageUrl;
    document.getElementById("title-movie-" + [positionNumber]).innerText = title;
    document.getElementById("idSpan-" + [positionNumber]).innerText = currentId;
    console.log(currentId);
    console.log(positionNumber);
    // document.getElementById("title-movie-" + [positionNumber]).setAttribute("onclick", "openModal(" + currentId + ")");
    document.getElementById("btn-more-infos-" + [positionNumber]).setAttribute("onclick", "openModal(" + currentId + ")");
    document.getElementById("imgimg-" + [positionNumber]).setAttribute("onclick", "openModal(" + currentId + ")");
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
        // console.log(idList);
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
        // console.log(idListCat1);
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
        // console.log(idListCat2);
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
        // console.log(idListCat3);
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
searchAndProcessSingleMovie();

searchAndProcessMovies();


























