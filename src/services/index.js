import axios from 'axios';

export const fetchProducts = () => {
  return axios.get('products.json');
};

export const fetchCategories = () => {
  return axios.get('categories.json');
};
