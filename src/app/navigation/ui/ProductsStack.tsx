import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { moderateScale } from 'react-native-size-matters';

import ProductListScreen from '@/screens/ProductListScreen/ui/ProductListScreen';
import ProductDetailScreen from '@/screens/ProductDetailScreen/ui/ProductDetailScreen';
import EditProductScreen from '@/screens/EditProductScreen/ui/EditProductScreen.tsx';

const Stack = createStackNavigator();

const ProductsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#6200ee',
                    shadowColor: '#000',
                    shadowOpacity: 0.2,
                    shadowOffset: { width: 0, height: 2 },
                    shadowRadius: 4,
                    elevation: 5,
                },
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: moderateScale(18),
                    fontWeight: 'bold',
                },
                headerTintColor: '#fff',
            }}
        >
            <Stack.Screen name="Products" component={ProductListScreen} />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
            <Stack.Screen name="EditProduct" component={EditProductScreen} />
        </Stack.Navigator>
    );
};

export default ProductsStack;
