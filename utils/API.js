import axios from 'axios';

const API = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 3000,
});

export const get = async (url) => {
  const res = await axios.get(`${url}?api_key=${process.env.API_KEY}`)
  return {data: res.data}
} 

export const search = async (url, search, page = 1, ) => {
  const res = await axios.get(`${url}?api_key=${process.env.API_KEY}&query=${search}&page=${page}`)
  return {data: res.data}
} 