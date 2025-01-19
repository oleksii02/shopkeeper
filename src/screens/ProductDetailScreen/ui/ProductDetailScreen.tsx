import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import {Card, ActivityIndicator} from 'react-native-paper';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@/app/providers/StoreProvider/config/store.ts';
import { useNavigation} from '@react-navigation/native';
import { styles } from './ProductDetailScreenStyles.ts';
import {handleDeleteProduct} from '@/shared/lib/handleDelete/deleteProduct.ts';
import ButtonComponent from '@/shared/ui/ButtonComponent/ButtonComponent.tsx';

const ProductDetailScreen = ({ route }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { productId, isCreated } = route.params;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const createdProducts = useSelector((state: RootState) => state.createdProduct.items);


    useEffect(() => {
        if (isCreated) {
            const productFromRedux = createdProducts.find((item) => item.id === productId);
            if (productFromRedux) {
                setProduct(productFromRedux);
                setLoading(false);
            } else {
                setLoading(false);
            }
        } else {
            axios.get(`https://fakestoreapi.com/products/${productId}`)
                .then((response) => {
                    setProduct(response.data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [productId, isCreated, createdProducts]);

    if (loading) {
        return <ActivityIndicator size="large" style={styles.loader} />;
    }

    if (!product) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Product not found.</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card>
                <Card.Cover source={{ uri: product.image }} style={styles.image} />
                <Card.Content>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                    <Text style={styles.category}>Category: {product.category}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <Text style={styles.rating}>
                        {product.rating
                            ? `Rating: ${product.rating.rate} (${product.rating.count} reviews)`
                            : 'No rating available'}
                    </Text>
                </Card.Content>

            </Card>
            <ButtonComponent
                mode="outlined"
                onPress={() => navigation.navigate('EditProduct', { product })}
            >
                Edit Product
            </ButtonComponent>
            <ButtonComponent
                textColor={'#B00020'}
                buttonColor={'#F1D1D3'}
                borderColor={'#B00020'}
                style={{borderColor:'#B00020'}}
                mode="outlined"
                onPress={() =>
                    handleDeleteProduct(product.id, dispatch, () => navigation.navigate('Products'))
                }
            >
                Delete Product
            </ButtonComponent>
        </ScrollView>
    );
};

export default ProductDetailScreen;
