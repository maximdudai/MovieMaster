import axios from 'axios';
import { appSetting } from './settings/settings';

export const getPictures = async (id, image_type = "backdrop", req_type = "movie") => {
  try {
    const response = await axios.get(`${appSetting.DEFAULT_URL}/${req_type}/${id}/images`, appSetting.API_OPTIONS);

    switch(image_type) {
      case "backdrop":
        return response.data.backdrops;
      case "poster":
        return response.data.posters;
      case "logo":
        return response.data.logos;
      default:
        return response.data;
    }
  } catch (error) {
    // Handle error (e.g., log it, throw it, etc.)
    console.error('Error fetching movie images:', error);
    throw error; // Rethrow the error for the caller to handle
  }
}
