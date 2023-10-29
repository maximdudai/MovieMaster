'use strict'
import axios from 'axios';
import { appSetting } from './settings/settings';

export const getMovieTrailer = async (id) => {
    try {

        const response = await axios.get(appSetting.DEFAULT_URL + '/movie/' + id + '/videos?language=en-US', appSetting.API_OPTIONS);
        return response.data.results[0].key;
        
    } catch (error) {
        console.error('Error fetching movie trailer:', error);
        throw error;
    }
};
