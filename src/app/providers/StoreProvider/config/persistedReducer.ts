import AsyncStorage from '@react-native-async-storage/async-storage';

import { createMigrate, persistReducer } from 'redux-persist';

import { rootReducer } from './reducer';

const rootMigrations = {
    1: (state: any) => ({
        ...state,
    }),
};

const persistConfig = {
    key: 'app',
    version: 1,
    storage: AsyncStorage,
    migrate: createMigrate(rootMigrations),
    // blacklist: [],
    whitelist: ['auth', 'createdProduct']};

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export default {};

