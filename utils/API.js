import axios from 'axios';
import fetch from 'node-fetch';


export const get = async (url) => {
  const res = await fetch(`${process.env.API_BASE_URL}${url}?api_key=${process.env.API_KEY}`)
  return await res.json();
} 

export const search = async (url, search, page = 1, ) => {
  const res = await fetch(`${process.env.API_BASE_URL}${url}?api_key=${process.env.API_KEY}&query=${search}&page=${page}`)

  return {data: res.data}
} 