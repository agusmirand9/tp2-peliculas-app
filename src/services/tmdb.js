const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const LANGUAGE = 'es-ES'

// Trae las películas populares,para la home
export async function getPopulares() {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
  const res = await fetch(url)
  const data = await res.json()
  return data.results
}

// Busca películas por título
export async function buscarPeliculas(query) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${LANGUAGE}&query=${encodeURIComponent(query)}`
  const res = await fetch(url)
  const data = await res.json()
  return data.results
}

// Trae el detalle de una película por id
export async function getDetalle(id) {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${LANGUAGE}`
  const res = await fetch(url)
  const data = await res.json()
  return data
}

// Trae la lista de géneros,para el filtro
export async function getGeneros() {
  const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE}`
  const res = await fetch(url)
  const data = await res.json()
  return data.genres
}