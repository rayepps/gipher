import config from '../config'

export const fetchTrending = async () => {
  const response = await fetch(`${config.GIPHY_API_URL}/v1/gifs/trending?api_key=${config.GIPHY_API_KEY}`)
  const data = await response.json()
  return data
}

export const search = async (keyword) => {
  const response = await fetch(`${config.GIPHY_API_URL}/v1/gifs/search?api_key=${config.GIPHY_API_KEY}&q=${keyword}`)
  const data = await response.json()
  return data
}

export default {
  fetchTrending,
  search
}