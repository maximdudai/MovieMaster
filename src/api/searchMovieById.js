import axios from 'axios';
import { appSetting } from './settings/settings';

export const searchMovieById = async (id, lang = "en-US") => {
    try {
        const response = await axios.get(appSetting.DEFAULT_URL + '/movie/' + id + '?language=' + lang, appSetting.API_OPTIONS);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie:', error);
        throw error;
    }
}