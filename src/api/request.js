import axios from 'axios';



const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
const https = process.env.REACT_APP_HTTPS;

const apiUrl = `${https}://${apiEndpoint}/red-file`;


export const fetchAllRedFiles = async (searchParams) => {
    const {page = 0, limit = 50} = searchParams;
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
