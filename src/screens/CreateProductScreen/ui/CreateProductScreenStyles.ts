import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(16),
        backgroundColor: '#f9f9f9',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#6200ee',
    },
    input: {
        marginBottom: moderateScale(8),
    },
    textarea: {
        textAlignVertical: 'top',
    },
    imagePickerContainer: {
        marginVertical: moderateScale(16),
        alignItems: 'center',
    },
    imageButton: {
        marginBottom: moderateScale(8),
    },
    imagePreview: {
        width: moderateScale(150),
        height: moderateScale(150),
        borderRadius: moderateScale(8),
        borderWidth: 1,
        borderColor: '#ccc',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: moderateScale(16),
    },
    menuButton: {
        marginBottom: moderateScale(8),
    },
    submitButton: {
        marginTop: moderateScale(16),
        paddingVertical: moderateScale(8),
    },
});
