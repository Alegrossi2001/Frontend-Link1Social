import { fetchDataFromApi } from "../AxiosDataLayer/LoginData";

export const getData = async () => {
    try {
        const data = await fetchDataFromApi();
        // Perform any business logic here if needed
        return data;
    } catch (error) {
        console.error('Error in getData service:', error);
        throw error;
    }
};