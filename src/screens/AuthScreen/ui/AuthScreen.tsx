import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {TextInput, Button, HelperText} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {RootState} from '@/app/providers/StoreProvider/config/store.ts';
import {styles} from './AuthStyles.ts';
import {useAuthHandler} from '@/shared/hooks/useAuthHandler/useAuthHandler.tsx';

const AuthScreen = ({navigation}) => {
    const {handleAuth} = useAuthHandler();
    const [isLogin, setIsLogin] = useState(true);
    const activeUser = useSelector((state: RootState) => state.auth.activeUser);


    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {email: '', password: ''},
    });

    useEffect(() => {
        if (activeUser) {
            navigation.replace('App');
        }
    }, [activeUser]);

    const toggleToLogin = () => setIsLogin(true);


    return (
        <View style={styles.container}>
            <Controller
                name="email"
                control={control}
                rules={{
                    required: 'Email is required.',
                    pattern: {
                        value: /^\S+@\S+$/,
                        message: 'Enter a valid email.',
                    },
                }}
                render={({field: {onChange, value}}) => (
                    <TextInput
                        label="Email"
                        value={value}
                        onChangeText={onChange}
                        style={styles.input}
                        error={!!errors.email}
                    />
                )}
            />
            {errors.email && <HelperText type="error">{errors.email.message}</HelperText>}

            <Controller
                name="password"
                control={control}
                rules={{required: 'Password is required.'}}
                render={({field: {onChange, value}}) => (
                    <TextInput
                        label="Password"
                        value={value}
                        onChangeText={onChange}
                        style={styles.input}
                        secureTextEntry
                        error={!!errors.password}
                    />
                )}
            />
            {errors.password && <HelperText type="error">{errors.password.message}</HelperText>}

            <Button mode="contained" onPress={handleSubmit((data) =>
                handleAuth(data, isLogin, navigation, toggleToLogin)
            )} style={styles.button}>
                {isLogin ? 'Login' : 'Register'}
            </Button>

            <Button onPress={() => setIsLogin(!isLogin)} style={styles.switchButton}>
                {isLogin ? 'Create an account' : 'Back to login'}
            </Button>
        </View>
    );
};

export default AuthScreen;
