import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        padding: moderateScale(16),
    },
    loader: {
        marginTop: moderateScale(50),
    },
    image: {
        height: moderateScale(200),
        resizeMode: 'cover',
    },
    title: {
        marginTop: moderateScale(16),
        fontSize: moderateScale(18),
        fontWeight: 'bold',
    },
    price: {
        marginTop: moderateScale(8),
        fontSize: moderateScale(16),
        color: '#4caf50',
    },
    category: {
        marginTop: moderateScale(4),
        fontSize: moderateScale(14),
        color: '#888',
    },
    description: {
        marginTop: moderateScale(8),
        fontSize: moderateScale(14),
        color: '#666',
    },
    rating: {
        marginTop: moderateScale(8),
        fontSize: moderateScale(14),
        color: '#444',
    },
    errorText: {
        fontSize: moderateScale(16),
        color: 'red',
        textAlign: 'center',
        marginTop: moderateScale(50),
    },
});
