import config from './config'

const API_KEY = config.apiKey

const URL =`http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=18f04d94c1cfd41ed479711e4872f1ed&format=json`

export default function getArtists(country){
  const url = URL.replace(':country', country)
  return fetch(url)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}