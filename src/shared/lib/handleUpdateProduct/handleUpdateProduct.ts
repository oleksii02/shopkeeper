import axios from 'axios';
import { Alert } from 'react-native';
import { AppDispatch } from '@/app/providers/StoreProvider/config/store';
import { updateProduct } from '@/entities/products/model/slices/createdProductsReducer';

type UpdateProductParams = {
    data: any;
    imageUri: string | null;
    dispatch: AppDispatch;
    navigation: any;
};

export const handleUpdateProduct = async ({
                                              data,
                                              imageUri,
                                              dispatch,
                                              navigation,
                                          }: UpdateProductParams) => {
    try {
        const updatedProduct = {
            ...data,
            price: parseFloat(data.price),
            image: imageUri,
        };

        const response = await axios.put(
            `https://fakestoreapi.com/products/${updatedProduct.id}`,
            updatedProduct
        );

        const result = response.data;

        dispatch(updateProduct({ updatedProduct: result, published: data.published }));

        Alert.alert('Success', 'Product updated successfully!');
        navigation.goBack();
    } catch (error) {
        console.error('Error updating product:', error);
        Alert.alert('Error', 'Failed to update product.');
    }
};
