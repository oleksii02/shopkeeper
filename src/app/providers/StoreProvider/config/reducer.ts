import { combineReducers } from 'redux';
import {productsReducer} from '@/entities/products/model/slices/productsSlice.ts';
import {createdProductsReducer} from '@/entities/products/model/slices/createdProductsReducer.ts';
import {authReducer} from '@/entities/auth/model/slices/authSlice.ts';



export const rootReducer = combineReducers({
    products: productsReducer,
    createdProduct: createdProductsReducer,
    auth: authReducer,
});

export default {};
