// services/api.js
import axios from 'axios';

const API_URL = "http://my-drupal-portfolio.lndo.site/jsonapi/";

export const fetchContent = async (contentType, includeFields = []) => {
  const includeParam = includeFields.length > 0 ? `?include=${includeFields.join(',')}` : '';
  const response = await axios.get(`${API_URL}${contentType}${includeParam}`);
  return response.data;
};
