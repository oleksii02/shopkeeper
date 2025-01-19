import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/app/providers/StoreProvider/config/store.ts';

type StoreProviderProps = {
    children: ReactNode;
};

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
