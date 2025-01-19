import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CreatedProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    published: boolean;
    category: string;
    createdAt: string;
}

interface CreatedProductsState {
    items: CreatedProduct[];
}

const initialState: CreatedProductsState = {
    items: [],
};

const saveToStorage = async (items: CreatedProduct[]) => {
    try {
        await AsyncStorage.setItem('createdProducts', JSON.stringify(items));
    } catch (error) {
        console.error('Failed to save products:', error);
    }
};

const loadFromStorage = async (): Promise<CreatedProduct[]> => {
    try {
        const storedData = await AsyncStorage.getItem('createdProducts');
        return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
        console.error('Failed to load products:', error);
        return [];
    }
};

const createdProductsSlice = createSlice({
    name: 'createdProducts',
    initialState,
    reducers: {
        addProduct: (state: CreatedProductsState, action: PayloadAction<CreatedProduct>) => {
            state.items.push(action.payload);
            saveToStorage(state.items);
        },
        updateProduct: (
            state: CreatedProductsState,
            action: PayloadAction<{ updatedProduct: CreatedProduct; published: boolean }>
        ) => {
            const {updatedProduct, published} = action.payload;
            const index = state.items.findIndex((item) => item.id === updatedProduct.id);

            if (index !== -1) {
                state.items[index] = {...updatedProduct, published};
            } else {
                state.items.push({...updatedProduct, published});
            }
            saveToStorage(state.items);
        },
        deleteProduct: (state: CreatedProductsState, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            saveToStorage(state.items);
        },
        setProducts: (state: CreatedProductsState, action: PayloadAction<CreatedProduct[]>) => {
            state.items = action.payload;
        },
    },
});

export const {addProduct, updateProduct, deleteProduct, setProducts} = createdProductsSlice.actions;

export const initializeProducts = () => async (dispatch: any) => {
    const loadedProducts = await loadFromStorage();
    dispatch(setProducts(loadedProducts));
};

export const createdProductsReducer = createdProductsSlice.reducer;
