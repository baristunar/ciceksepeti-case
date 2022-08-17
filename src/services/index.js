import { axiosInstance } from '@Utils/axios-instance';
import URLS from './urls';

export const fetchProducts = () => {
  return axiosInstance.get(URLS.product);
};

export const fetchCategories = () => {
  return axiosInstance.get(URLS.categories);
};
