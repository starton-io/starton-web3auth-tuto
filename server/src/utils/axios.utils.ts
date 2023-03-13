/*
| Developed by Starton
| Filename : axios.utils.ts
| Author : Calixte De Tourris (calixte@starton.io)
*/
import axios from 'axios';
import { StartonBaseURL } from '../config/starton.config';
import { config } from 'dotenv';

config();

/*
|--------------------------------------------------------------------------
| Utils
|--------------------------------------------------------------------------
*/
export const StartonAxios = axios.create({
  baseURL: StartonBaseURL,
  headers: {
    'x-api-key': process.env.STARTON_API_KEY,
  },
});
