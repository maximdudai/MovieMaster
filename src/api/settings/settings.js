import appSettings from './settings.json';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: appSettings.API_KEY
  }
};

export const appSetting = {
  API_OPTIONS: options,
  DEFAULT_URL: appSettings.URL.DEFAULT_URL,
  POPULAR_MOVIES: appSettings.URL.POPULAR_MOVIES,
  API_KEY: appSettings.API_KEY,
};
