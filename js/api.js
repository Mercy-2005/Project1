'use strict';

const api_key = 'd4dea60697370824da7ce07358901b9c';
const imageBaseURL = 'https://image.tmdb.org/t/p/'; // for movie images

// fetch data from a server using the 'url' and pass the result in json data to a 'callback' function,
// along with an optional parameter if has 'optionalParam'
const fetchDataFromServer = function(url, callback, optionalParam) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };
