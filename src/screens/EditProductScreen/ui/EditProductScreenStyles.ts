import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        padding: moderateScale(16),
    },
    input: {
        marginBottom: moderateScale(8),
    },
    textarea: {
        height: moderateScale(100),
    },
    imagePickerContainer: {
        marginVertical: moderateScale(16),
        alignItems: 'center',
    },
    imageButton: {
        marginBottom: 8,
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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: moderateScale(16),
    },
    saveButton: {
        marginTop: moderateScale(16),
        marginBottom: moderateScale(8),
    },
    deleteButton: {
        marginTop: moderateScale(8),
        color:'red',
    },
});
