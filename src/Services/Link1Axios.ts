import axios, { AxiosInstance } from 'axios';

const BaseURL = process.env.LINK1_BASE_URL;

const Link1Axios: AxiosInstance = axios.create({
    baseURL: BaseURL,
    timeout: 10000, // Set a default timeout (in milliseconds)
});

// Function to add authorization header
export const setAuthToken = (token: string): void => {
    Link1Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// Function to remove authorization header
export const removeAuthToken = (): void => {
    delete Link1Axios.defaults.headers.common['Authorization'];
};

export default Link1Axios;

