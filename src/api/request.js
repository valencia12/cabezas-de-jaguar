import axios from 'axios';

const apiUrl =
  'http://archivo-rojo.asociacioncabezasdejaguar.com/api/red-file?dependency=FPL&page=0&limit=50';

export const fetchDataFromApi = async () => {
  const response = await axios.get(apiUrl);
  return response.data;
};
