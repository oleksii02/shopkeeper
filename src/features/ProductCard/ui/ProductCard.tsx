import React from 'react';
import { Card, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const ProductCard = ({ product, onPress }) => {
    return (
        <Card style={styles.card} onPress={onPress}>
            <Card.Cover source={{ uri: product.image }} style={styles.image} />
            <Card.Content>
                <Text variant="titleMedium" style={styles.title} numberOfLines={2}>
                    {product.title}
                </Text>
                <Text variant="bodyMedium" style={styles.price}>${product.price.toFixed(2)}</Text>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: moderateScale(8),
        width: moderateScale(160),
        height: moderateScale(220),
    },
    image: {
        height: moderateScale(120),
        resizeMode: 'contain',
        backgroundColor: '#f9f9f9',
    },
    title: {
        marginTop: moderateScale(8),
        fontWeight: 'bold',
    },
    price: {
        marginTop: moderateScale(4),
        color: '#4caf50',
    },
});

export default ProductCard;
