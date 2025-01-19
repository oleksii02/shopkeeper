import React, { FC, ReactNode } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {moderateScale} from 'react-native-size-matters';

type StatusBarProps = {
    children: ReactNode;
};

const StatusBarProvider: FC<StatusBarProps> = ({ children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.background} />
            <StatusBar style="light" />
            <View style={styles.safeArea}>{children}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    background: {
        position: 'absolute',
        zIndex: -1,
        height: '50%',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#6200ee',
    },
    safeArea: {
        flex: 1,
        paddingTop:moderateScale(45),
        paddingBottom: moderateScale(10),
    },
});

export default StatusBarProvider;
