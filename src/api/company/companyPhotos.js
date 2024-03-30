'use strict'
import axios from 'axios';
import { appSetting } from '../settings/settings';

export const companyPhotos = async (id, lang = "en-US") => {
    try {
        const response = await axios.get(`${appSetting.DEFAULT_URL}company/${id}/images?languange=${lang}`, appSetting.API_OPTIONS);
        return response.data.logos;
        
    } catch (error) {
        console.error('Error fetching movie actors:', error);
        throw error;
    }
};


export const companyPhoto = (poster_path) => {
    try {
        const response = `https://image.tmdb.org/t/p/original${poster_path}`;
        return response;
    } catch (error) {
        console.error('Error fetching movie image:', error);
        throw error;
    }
};