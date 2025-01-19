import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const ButtonComponent = ({ children, style, ...props }) => {
    return (
        <Button
            mode="contained"
            style={[styles.button, style]}
            labelStyle={styles.label}
            {...props}
        >
            {children}
        </Button>
    );
};

const styles = StyleSheet.create({
    button: {
        marginVertical: moderateScale(8),
        borderRadius: moderateScale(8),
    },
    label: {
        fontSize: moderateScale(14),
    },
});

export default ButtonComponent;
