'use strict'

import axios from 'axios';
import { appSetting } from '../settings/settings';

export const getPopularPeople = async (page = 1) => {
    try {
        const response = await axios.get(appSetting.POPULAR_PEOPLE + `&page=${page}`, appSetting.API_OPTIONS);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movie images:', error);
        throw error;
    }
};


export const getActorBackdrop = (backdrop_path) => {
    try {
        const response = `https://image.tmdb.org/t/p/original${backdrop_path}`;
        return response;
    } catch (error) {
        console.error('Error fetching Actor image:', error);
        throw error;
    }
};

export const getActorPoster = (poster_path) => {
    try {
        const response = `https://image.tmdb.org/t/p/original${poster_path}`;
        return response;
    } catch (error) {
        console.error('Error fetching Actor image:', error);
        throw error;
    }
};

export const getActorDetails = async (actorId) => {
    try {
        const response = await axios.get(`${appSetting.PEOPLE}/${actorId}?language=en-US`, appSetting.API_OPTIONS);
        return response?.data;
    } catch (error) {
        console.error('Error fetching Actor Details:', error);
        throw error;
    }
};

export const getActorImages = async (actorId) => {
    try {
        const response = await axios.get(`${appSetting.PEOPLE}/${actorId}/images`, appSetting.API_OPTIONS);
        return response.data.profiles;
    } catch (error) {
        console.error('Error fetching Actor images:', error);
        throw error;
    }
}