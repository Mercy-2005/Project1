'use strict';

const addEventOnElements = function (elements, eventType,callback) {
    for(const elem of elements) elem.addEventListener(eventType,callback);
}

// toggle search box on smaller screens
const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function() {
    searchBox.classList.toggle("active");
});

// store movieid in 'localstorage when you click any movie card'

const getMovieDetail = function(movieId){
    window.localStorage.setItem("movieId", String(movieId));
}