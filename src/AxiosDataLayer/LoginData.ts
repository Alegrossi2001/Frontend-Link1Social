import Link1Axios from "../Services/Link1Axios";

export const fetchDataFromApi = async () => {
    const response = await Link1Axios.get('/data');
    return response.data;
};