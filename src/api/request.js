import axios from 'axios';

const apiUrl =
 'http://archivo-rojo.asociacioncabezasdejaguar.com/api/red-file';

export const fetchDataFromApi = async (searchParams) => {
    const {page = 0, limit = 50} = searchParams;
    const params = {
        ...searchParams,
        page,
        limit
    };
    const response = await axios.get(apiUrl, { params });
    return response.data;
};
