import axios from 'axios';

const API_URL = "http://my-drupal-portfolio.lndo.site/jsonapi/";

export const fetchContent = async (contentType) => {
  const response = await axios.get(`${API_URL}/${contentType}`);
  return response.data;
};
