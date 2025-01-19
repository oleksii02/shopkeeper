import axios from 'axios';
import { Alert } from 'react-native';
import { AppDispatch } from '@/app/providers/StoreProvider/config/store';
import { deleteProduct } from '@/entities/products/model/slices/createdProductsReducer.ts';

export const handleDeleteProduct = async (
    productId: number,
    dispatch: AppDispatch,
    onSuccess?: () => void
) => {
    Alert.alert(
        'Delete Confirmation',
        'Are you sure you want to delete this product?',
        [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: async () => {
                    try {
                        await axios.delete(`https://fakestoreapi.com/products/${productId}`);
                        dispatch(deleteProduct(productId));

                        Alert.alert('Success', 'Product deleted successfully!');

                        if (onSuccess) {
                            onSuccess();
                        }
                    } catch (error) {
                        console.error('Error deleting product:', error);
                        Alert.alert('Error', 'Failed to delete product.');
                    }
                },
            },
        ]
    );
};
