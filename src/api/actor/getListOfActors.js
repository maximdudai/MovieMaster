'use strict'
import axios from 'axios';
import { appSetting } from '../settings/settings';

export const getListOfActors = async (id, lang = "en-US") => {
    try {
        const response = await axios.get(`${appSetting.DEFAULT_URL}/movie/${id}/credits?languange=${lang}`, appSetting.API_OPTIONS);
        return response.data;
        
    } catch (error) {
        console.error('Error fetching movie actors:', error);
        throw error;
    }
};
