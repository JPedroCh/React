import axios from 'axios';

export const CEP_API = axios.create({ baseURL: import.meta.env.VITE_CEP_API_URL });
