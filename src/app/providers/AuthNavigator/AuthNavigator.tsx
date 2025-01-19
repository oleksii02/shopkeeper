import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigation from '@/app/navigation/ui/AppNavigation';
import AuthScreen from '@/screens/AuthScreen/ui/AuthScreen.tsx';
import {store} from '@/app/providers/StoreProvider/config/store.ts';
import {initializeAuth} from '@/entities/auth/model/slices/authSlice.ts';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    useEffect(() => {
        store.dispatch(initializeAuth());
    }, []);
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,

            }}
        >
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="App" component={AppNavigation} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
