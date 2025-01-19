import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
    email: string;
    password: string;
}

interface AuthState {
    users: User[];
    activeUser: User | null;
}

const initialState: AuthState = {
    users: [],
    activeUser: null,
};

const saveActiveUserToStorage = async (user: User | null) => {
    try {
        if (user) {
            await AsyncStorage.setItem('activeUser', JSON.stringify(user));
        } else {
            await AsyncStorage.removeItem('activeUser');
        }
    } catch (error) {
        console.error('Failed to save active user:', error);
    }
};

const saveUsersToStorage = async (users: User[]) => {
    try {
        await AsyncStorage.setItem('users', JSON.stringify(users));
    } catch (error) {
        console.error('Failed to save users:', error);
    }
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerUser: (state: AuthState, action: PayloadAction<User>) => {
            state.users.push(action.payload);
            saveUsersToStorage(state.users);
        },
        loginUser: (state: AuthState, action: PayloadAction<User>) => {
            state.activeUser = action.payload;
            saveActiveUserToStorage(action.payload);
        },
        logoutUser: (state: AuthState) => {
            state.activeUser = null;
            saveActiveUserToStorage(null);
        },
        setUsers: (state: AuthState, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
        setActiveUser: (state: AuthState, action: PayloadAction<User | null>) => {
            state.activeUser = action.payload;
        },
    },
});

export const {registerUser, loginUser, logoutUser, setUsers, setActiveUser} = authSlice.actions;

export const initializeAuth = () => async (dispatch: any) => {
    try {
        const users = await AsyncStorage.getItem('users');
        const activeUser = await AsyncStorage.getItem('activeUser');

        if (users) {
            dispatch(setUsers(JSON.parse(users)));
        }

        if (activeUser) {
            dispatch(setActiveUser(JSON.parse(activeUser)));
        }
    } catch (error) {
        console.error('Failed to initialize auth:', error);
    }
};

export const authReducer = authSlice.reducer;
