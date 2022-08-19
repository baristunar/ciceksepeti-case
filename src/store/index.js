import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './basket';

export default configureStore({
  reducer: {
    basket: basketReducer
  }
});
