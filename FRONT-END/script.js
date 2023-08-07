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


async function fetchBestMovieDetails(id) {

    const url = "http://localhost:8000/api/v1/titles/" + id;
    const response = await fetch(url);
    const movie = await response.json();
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

    document.getElementById("bestRatedMovies-img").src = ImageUrl;
}


// fetch data for the best movie
async function fetchMovieDetails() {

    const url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"
    const response = await fetch(url);
    const movies = await response.json();

    const movie = movies.results[0]

    const urlResponse = await fetch(movie.url);
    const movieDetails = await urlResponse.json();

    const description = movieDetails.description;
    const title = movie.title;
    const ImageUrl = movie.image_url;
    const genres = movie.genres[0];
    const year = movie.year;
    const rated = movie.rated;
    const directors = movie.directors;
    const actors = movie.actors;
    const duration = movie.duration;
    const countries = movie.countries;
    const id = movie.id;
    
    document.getElementById("title-movie-big-div").innerText = title;
    document.getElementById("big-div-img-0").src = ImageUrl;
    document.getElementById("description-movie-big-div2").innerText = description;
    document.getElementById("big-div-button-more-info").setAttribute("onclick", "openModal(" + id + ")");
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
    const categories = [
        { id: 1, from: 0, to: 6 },
        { id: 2, from: 7, to: 13 },
        { id: 3, from: 14, to: 20 },
        { id: 4, from: 21, to: 27 }
    ];

    function createCarouselElement(i, catId) {
        const carouselElement = document.createElement("li");
        carouselElement.setAttribute("id", "carousel__slide" + i + "__cat" + catId);
        carouselElement.setAttribute("tabindex", "0");
        carouselElement.classList.add('carousel__slide');

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
        carousselLinkPrev.setAttribute("href", "#carousel__slide" + parseInt(i - 1) + "__cat" + catId);
        carousselLinkPrev.setAttribute("class", "carousel__prev");

        const carousselLinkNext = document.createElement("a");
        carousselLinkNext.setAttribute("href", "#carousel__slide" + parseInt(i + 1) + "__cat" + catId);
        carousselLinkNext.setAttribute("class", "carousel__next");

        carousselSnapper.appendChild(carousselLinkPrev);
        carousselSnapper.appendChild(carousselLinkNext);

        boxDesc.appendChild(title);
        divBoxBlack.appendChild(btnMoreInfo);
       
        boxDesc.appendChild(idSpan);
        divBoxBlack.appendChild(boxDesc);
        divBoxInfos.appendChild(divBoxBlack);

        carouselElement.appendChild(imgMovie);
        carouselElement.appendChild(divBoxInfos);
        carouselElement.appendChild(carousselSnapper);

        return carouselElement;
    }

    function createCategory(catId, from, to) {
        const moviesContainerCat = document.getElementById("carousel__viewport_cat" + catId);

        for (let i = from; i <= to; i++) {
            const carouselElement = createCarouselElement(i, catId);
            moviesContainerCat.appendChild(carouselElement);
        }
    }

    for (const category of categories) {
        createCategory(category.id, category.from, category.to);
    }
}

adddivToCaroussel();


function addToModal() {
   
    const modalInner = document.getElementById("modal-inner");

    const modalInnerTop = document.createElement("div");
    modalInnerTop.setAttribute("class", "modal-inner-top");

    modalInner.appendChild(modalInnerTop);

    const imgModal = document.createElement("img");
    imgModal.setAttribute("id", "modal-inner-img");

    modalInnerTop.appendChild(imgModal);

    const title = document.createElement("h1");
    title.setAttribute("class", "modal-inner-title");
    title.setAttribute("id", "title-movie-big-div-modal");

    modalInnerTop.appendChild(title);

    const modalInnerBottom = document.createElement("div");
    modalInnerBottom.setAttribute("class", "modal-inner-bottom");

    modalInner.appendChild(modalInnerBottom);

    // genre
    const pText1 = document.createElement("p");
    pText1.setAttribute("class", "modal-inner-genre modal-text");
    pText1.setAttribute("id", "modal-genre-big-div");

    // year
    const pText2 = document.createElement("p");
    pText2.setAttribute("class", "modal-inner-year modal-text");
    pText2.setAttribute("id", "modal-year-big-div");

    // rated
    const pText3 = document.createElement("p");
    pText3.setAttribute("class", "modal-inner-rated modal-text");
    pText3.setAttribute("id", "modal-rated-big-div");

    // score lmbd
    const pText4 = document.createElement("p");
    pText4.setAttribute("class", "modal-inner-score-lmdb modal-text");
    pText4.setAttribute("id", "modal-score-imdb-big-div");

    // director
    const pText5 = document.createElement("p");
    pText5.setAttribute("class", "modal-inner-director modal-text");
    pText5.setAttribute("id", "modal-director-big-div");

    // actor
    const pText6 = document.createElement("p");
    pText6.setAttribute("class", "modal-inner-actor-list modal-text");
    pText6.setAttribute("id", "modal-actor-list-big-div");

    // duration 
    const pText7 = document.createElement("p");
    pText7.setAttribute("class", "modal-inner-duration modal-text");
    pText7.setAttribute("id", "modal-duration-big-div");

    // country origin
    const pText8 = document.createElement("p");
    pText8.setAttribute("class", "modal-inner-country-origin modal-text");
    pText8.setAttribute("id", "modal-country-origin-big-div");


    // box office result
    const pText9 = document.createElement("p");
    pText9.setAttribute("class", "modal-inner-box-office-result modal-text");
    pText9.setAttribute("id", "modal-box-office-result-big-div");

    // actor 
    const pText10 = document.createElement("p");
    pText10.setAttribute("class", "modal-inner-actor-summary modal-text");
    pText10.setAttribute("id", "modal-actor-summary-big-div");

    // play button

    const btnPlay = document.createElement("button");
    btnPlay.textContent = 'Play';
    btnPlay.setAttribute("class", "button button-play button-modal");


    modalInnerBottom.appendChild(pText1);
    modalInnerBottom.appendChild(pText2);
    modalInnerBottom.appendChild(pText3);
    modalInnerBottom.appendChild(pText4);
    modalInnerBottom.appendChild(pText5);
    modalInnerBottom.appendChild(pText6);
    modalInnerBottom.appendChild(pText7);
    modalInnerBottom.appendChild(pText8);
    modalInnerBottom.appendChild(pText9);
    modalInnerBottom.appendChild(pText10);
    modalInner.appendChild(btnPlay);

}

addToModal();

function addImageToBigDiv() {

    // add image
    const bigDiv = document.getElementById("big-div-img-box");

    const bigDivImage = document.createElement("img");
    bigDivImage.setAttribute("id", "big-div-img-0");
    bigDivImage.setAttribute("src", "");
    bigDivImage.setAttribute("alt", "movie image");

    bigDiv.appendChild(bigDivImage);

    // add title 
    const boxDesc = document.getElementById("box-desc");

    const boxDescTitle = document.createElement("h2");
    boxDescTitle.setAttribute("id", "title-movie-big-div");
    boxDescTitle.setAttribute("class", "title-movie-big-div");

    boxDesc.appendChild(boxDescTitle);

    // add description 
    const boxDescText= document.createElement("h2");
    boxDescText.setAttribute("id", "description-movie-big-div2");
    boxDescText.setAttribute("class", "description-movie-big-div");

    boxDesc.appendChild(boxDescText);
}

addImageToBigDiv();



async function fetchMovieDetailsForCategories(currentId, positionNumber) {

    let url = "http://localhost:8000/api/v1/titles/" + currentId;
    // console.log(url);
    let response = await fetch(url);
    let movie = await response.json();

    const title = movie.title;
    const imageUrl = movie.image_url;

    // // // Update the HTML elements with movie details
    document.getElementById("imgimg-"+ [positionNumber]).src = imageUrl;
    document.getElementById("title-movie-" + [positionNumber]).innerText = title;
    document.getElementById("idSpan-" + [positionNumber]).innerText = currentId;
    console.log(currentId);
    console.log(positionNumber);
    document.getElementById("btn-more-infos-" + [positionNumber]).setAttribute("onclick", "openModal(" + currentId + ")");
    document.getElementById("imgimg-" + [positionNumber]).setAttribute("onclick", "openModal(" + currentId + ")");
}

function someOtherFunction(id) {
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
