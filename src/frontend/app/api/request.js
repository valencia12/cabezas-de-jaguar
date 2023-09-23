import axios from 'axios';

// eslint-disable-next-line no-undef
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
// eslint-disable-next-line no-undef
const https = process.env.REACT_APP_HTTPS;

const apiUrl = `${https}://${apiEndpoint}/red-file`;

export const fetchAllRedFiles = async (searchParams) => {
  const { page = 0, limit = 50 } = searchParams;
  const params = {
    ...searchParams,
    page,
    limit
  };
  const response = await axios.get(apiUrl, { params });
  return response.data;
};

export const fetchRedFile = async (referenceCode) => {
  const response = await axios.get(`${apiUrl}/${referenceCode}`);
  return response.data;
};

export const reserveRedFile = async (paylod) => {
  const response = await axios.post(`${apiUrl}/contact`, paylod);
  return response.data;
};