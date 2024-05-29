import axios from 'axios';

export const CEP_API = axios.create({ baseURL: "http://viacep.com.br/ws/" });

export const NEWS_API = axios.create({ baseURL: import.meta.env.VITE_NEWS_API_URL });
