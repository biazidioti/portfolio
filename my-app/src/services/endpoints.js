 import createHash from "./createHash";

import { PUBLIC_KEY } from "./keys";

const BASE_URL = 'http://gateway.marvel.com/v1/public/';
const CHARACTERS_ENDPOINT = 'characters?';

export const fetchAPI = (query) => {
  const timestamp = new Date().getTime();
  const hash = createHash(timestamp);
  const auth = `&ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;
  const url = `${BASE_URL}${CHARACTERS_ENDPOINT}${query}${auth}`;
  return fetch(url);
}

export default fetchAPI;