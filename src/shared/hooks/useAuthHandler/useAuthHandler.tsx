import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { loginUser, registerUser } from '@/entities/auth/model/slices/authSlice.ts';
import { RootState } from '@/app/providers/StoreProvider/config/store.ts';

export const useAuthHandler = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state: RootState) => state.auth);

    const handleAuth = async (
        data: { email: string; password: string },
        isLogin: boolean,
        navigation: any,
        toggleToLogin: () => void
    ) => {
        if (isLogin) {
            const user = users.find(
                (user) => user.email === data.email && user.password === data.password
            );
            if (user) {
                await AsyncStorage.setItem('activeUser', JSON.stringify(user));
                dispatch(loginUser(user));
                navigation.replace('App');
            } else {
                Alert.alert('Error', 'Invalid email or password');
            }
        } else {
            const exists = users.find((user) => user.email === data.email);
            if (exists) {
                Alert.alert('Error', 'User already exists');
            } else {
                dispatch(registerUser(data));
                Alert.alert('Success', 'Account created. Please log in.');
                toggleToLogin();
            }
        }
    };

    return { handleAuth };
};
