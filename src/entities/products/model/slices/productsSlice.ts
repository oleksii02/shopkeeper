import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

interface ProductsState {
    items: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ProductsState = {
    items: [],
    status: 'idle',
};

export const fetchProducts = createAsyncThunk<Product[], number>(
    'products/fetchProducts',
    async (limit: number) => {
        const response = await axios.get<Product[]>(`${API_URL}?limit=${limit}`);
        return response.data;
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state: ProductsState) => {
                state.status = 'loading';
            })
            .addCase(
                fetchProducts.fulfilled,
                (state: ProductsState, action: PayloadAction<Product[]>) => {
                    state.status = 'succeeded';
                    state.items = action.payload;
                }
            )
            .addCase(fetchProducts.rejected, (state: ProductsState) => {
                state.status = 'failed';
            });
    },
});

export const productsReducer = productsSlice.reducer;
