import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { store } from '@/app/providers/StoreProvider/config/store.ts';
import { initializeProducts } from '@/entities/products/model/slices/createdProductsReducer.ts';
import StatusBarProvider from '@/app/providers/StatusBar/StatusBar.tsx';
import StoreProvider from '@/app/providers/StoreProvider/ui/StoreProvider';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Text } from 'react-native';
import AuthNavigator from '@/app/providers/AuthNavigator/AuthNavigator.tsx';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#6200ee',
        background: '#fff',
    },
};

const Stack = createStackNavigator();

export default function App() {
    useEffect(() => {
        store.dispatch(initializeProducts());
    }, []);

    const persistor = persistStore(store);

    return (
        <StatusBarProvider>
            <StoreProvider>
                <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
                    <PaperProvider theme={theme}>
                        <AuthNavigator />
                    </PaperProvider>
                </PersistGate>
            </StoreProvider>
        </StatusBarProvider>
    );
}
