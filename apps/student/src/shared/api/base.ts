import { Configuration } from './gen'
import { AuthControllerApi } from './gen'
import axios from 'axios'

const config = new Configuration()
const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

const api = new AuthControllerApi(config, config.basePath, axiosInstance)

export { api }
