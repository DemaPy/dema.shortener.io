import axios from 'axios'


export const myAxios = axios.create({
    baseURL: 'https://api.shrtco.de/v2/'
  });