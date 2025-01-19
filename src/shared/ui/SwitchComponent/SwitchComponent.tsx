import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Switch } from 'react-native-paper';
import { moderateScale } from 'react-native-size-matters';

const SwitchComponent = ({ label, value, onValueChange }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Switch value={value} onValueChange={onValueChange} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: moderateScale(16),
    },
    label: {
        fontSize: moderateScale(14),
    },
});

export default SwitchComponent;
