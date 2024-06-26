'use strict'

import axios from 'axios';
import { appSetting } from '../settings/settings';

export const getPopularMovies = async () => {
    try {
    const response = await axios.get(appSetting.POPULAR_MOVIES, appSetting.API_OPTIONS);
        return response.data.results;
        
    } catch (error) {
        console.error('Error fetching movie images:', error);
        throw error;
    }
};

// generate a single/multiple random movie(s) from the list of movies from local storage
export const getRandomMovie = async (maxMovies = null) => {
    try {
        let listOfMovie = JSON.parse(sessionStorage.getItem('movies'));

        if(!listOfMovie) {
            listOfMovie = await getPopularMovies();
            sessionStorage.setItem('movies', JSON.stringify(listOfMovie));
        }

        let randomMovieList = [];

        if(!maxMovies) {
            let randomFromMovieList = Math.floor(Math.random() * listOfMovie.length);

            do {
                randomFromMovieList = Math.floor(Math.random() * listOfMovie.length);
            }
            while(randomMovieList.includes(listOfMovie[randomFromMovieList]));

            randomMovieList = listOfMovie[randomFromMovieList];
        }
        
        else {
            for(let i = 1; i <= maxMovies; i++) {
                const randomNum = Math.floor(Math.random() * listOfMovie.length);
                randomMovieList.push(listOfMovie[randomNum]);
            }
        }
        return randomMovieList;
        
    } catch (error) {
        console.error('Error fetching random movie:', error);
        throw error;
    }
}
export const getMovieBackdrop = (backdrop_path) => {
    try {
        const response = `https://image.tmdb.org/t/p/original${backdrop_path}`;
        return response;
    } catch (error) {
        console.error('Error fetching movie image:', error);
        throw error;
    }
};

export const getMoviePoster = (poster_path) => {
    try {
        const response = `https://image.tmdb.org/t/p/original${poster_path}`;
        return response;
    } catch (error) {
        console.error('Error fetching movie image:', error);
        throw error;
    }
};