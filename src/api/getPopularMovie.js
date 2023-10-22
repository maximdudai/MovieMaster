'use strict'

import axios from 'axios';

import { appSetting } from './settings/settings';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: appSetting.API_KEY
  }
};

export const getPopularMovies = async () => {
    const response = await axios.get(appSetting.POPULAR_MOVIES + '/movie/popular?language=en-US&page=1', options);
    return response.data.results;
};
