let axios = require('axios')

const API_BASE_URL = process.env.API_BASE_URL

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Pragma: 'no-cache'
  }
})

export { API_BASE_URL, axiosInstance }
export default axiosInstance
