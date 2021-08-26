export default function fetchAPI() {
  return fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=68413a57c1d1f94139c6d1e3a1c79a72')
    .then((response) => response.json());
}