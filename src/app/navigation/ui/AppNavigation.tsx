import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';

import ProductsStack from './ProductsStack';
import CreateProductScreen from '@/screens/CreateProductScreen/ui/CreateProductScreen';
import UserScreen from '@/screens/UserScreen/ui/UserScreen.tsx';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                headerStyle: {
                    height: moderateScale(0),
                    backgroundColor: '#6200ee',
                },
                tabBarStyle: {
                    height: moderateScale(50),
                    paddingBottom: moderateScale(5),
                },
                tabBarActiveTintColor: '#6200ee',
                tabBarInactiveTintColor: '#999',
                tabBarLabelStyle: {
                    fontSize: moderateScale(12),
                    fontWeight: 'bold',
                },
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;

                    if (route.name === 'Product List') {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (route.name === 'Create Product') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }
                    else if (route.name === 'User') {
                        iconName = focused ? 'person' : 'person-outline';
                    }


                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Product List" component={ProductsStack} />
            <Tab.Screen name="Create Product" component={CreateProductScreen} />
            <Tab.Screen name="User" component={UserScreen} />

        </Tab.Navigator>
    );
};

export default AppNavigation;
