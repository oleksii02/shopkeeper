import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: moderateScale(16),
        backgroundColor: '#f9f9f9',
    },
    input: {
        marginBottom: moderateScale(12),
    },
    button: {
        marginTop: moderateScale(16),
        paddingVertical: moderateScale(8),
        backgroundColor: '#6200ee',
    },
    switchButton: {
        marginTop: moderateScale(12),
        alignSelf: 'center',
        color: '#6200ee',
    },
    errorText: {
        fontSize: moderateScale(12),
        color: 'red',
        marginBottom: moderateScale(8),
    },
});
