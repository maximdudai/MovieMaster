
import axios from 'axios';
import { appSetting } from './settings/settings';

export const searchMovieQuery = async (query) => {
    try {
        const response = await axios.get(appSetting.DEFAULT_URL + '/search/movie?query=' + query + '&api_key=' + appSetting.API_KEY, appSetting.API_OPTIONS);
        return response.data.results; 
    } catch (error) {
        console.error('Error fetching movie:', error);
        throw error;
    }
}