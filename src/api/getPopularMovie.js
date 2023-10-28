'use strict'

import axios from 'axios';
import { appSetting } from './settings/settings';

export const getPopularMovies = async () => {
    try {
        const response = await axios.get(appSetting.POPULAR_MOVIES + '/movie/popular?language=en-US&page=1', appSetting.API_OPTIONS);
        return response.data.results;
        
    } catch (error) {
        console.error('Error fetching movie images:', error);
        throw error;
    }

};
