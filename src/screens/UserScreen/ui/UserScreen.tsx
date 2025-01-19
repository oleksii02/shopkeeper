import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logoutUser} from '@/entities/auth/model/slices/authSlice.ts';
import {moderateScale} from 'react-native-size-matters';

const UserScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { activeUser } = useSelector((state) => state.auth);

    const handleLogout = async () => {
        await AsyncStorage.removeItem('activeUser');
        dispatch(logoutUser());
        navigation.replace('Auth');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: moderateScale(20), fontWeight: 'bold' }}>User Info</Text>
            <Text>Email: {activeUser?.email}</Text>
            <Button mode="contained" onPress={handleLogout} style={{ marginTop: moderateScale(20) }}>
                Logout
            </Button>
        </View>
    );
};

export default UserScreen;
