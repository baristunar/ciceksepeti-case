import Axios from 'axios';

export const axiosInstance = Axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});
