import React from 'react';
import { TextInput, HelperText } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const InputComponent = ({ error, helperText, ...props }) => {
    return (
        <>
            <TextInput
                mode="outlined"
                style={styles.input}
                error={!!error}
                {...props}
            />
            {error && (
                <HelperText type="error" visible={!!error} style={styles.helperText}>
                    {helperText}
                </HelperText>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: moderateScale(12),
    },
    helperText: {
        marginBottom: moderateScale(8),
    },
});

export default InputComponent;
