import axios from 'axios'
import { config } from '../config'

const instance = axios.create({
    baseURL: config.API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 3000,
  })