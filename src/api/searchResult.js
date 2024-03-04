
'use strict'

import axios from 'axios';
import { appSetting } from './settings/settings';
import { getQueryParamsFromUrl } from '../utils/utils';

export const searchResult = async (query) => {
    try {
        const queryValue = getQueryParamsFromUrl(query);

        const response = await axios.get(appSetting.SEARCH + "query=" + queryValue, appSetting.API_OPTIONS);
        return response.data.results; 
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}