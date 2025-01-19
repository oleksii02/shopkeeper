import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import { AppDispatch } from '@/app/providers/StoreProvider/config/store';
import { addProduct } from '@/entities/products/model/slices/createdProductsReducer';
import {FormData} from '@/shared/types/formData.ts';

export const useCreateProduct = () => {
    const dispatch = useDispatch<AppDispatch>();

    const createProduct = async (
        data: FormData,
        imageUri: string | null,
        category: string,
        reset: () => void,
        setImageUri: (uri: string | null) => void,
        setCategory: (category: string) => void
    ) => {
        try {
            const newProduct = {
                ...data,
                price: parseFloat(data.price),
                createdAt: new Date().toISOString(),
                category,
                image: imageUri || '',
            };

            const response = await fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });

            const result = await response.json();

            dispatch(addProduct({ ...result, id: Date.now(), published: data.published }));

            Alert.alert('Success', 'Product created successfully!');
            reset();
            setImageUri(null);
            setCategory('');
        } catch (error) {
            console.error('Error creating product:', error);
            Alert.alert('Error', 'Failed to create product.');
        }
    };

    return { createProduct };
};
