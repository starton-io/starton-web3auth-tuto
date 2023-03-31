/*
| Developed by Starton
| Filename : axios.utils.ts
| Author : Calixte De Tourris (calixte@starton.io)
*/
import axios from 'axios';
import { config } from 'dotenv';

config();

/*
|--------------------------------------------------------------------------
| Utils
|--------------------------------------------------------------------------
*/

export const STARTON_BASE_URL = 'https://api.starton.io/v3';

export const StartonAxios = axios.create({
  baseURL: STARTON_BASE_URL,
  headers: {
    'x-api-key': process.env.STARTON_API_KEY,
  },
});
