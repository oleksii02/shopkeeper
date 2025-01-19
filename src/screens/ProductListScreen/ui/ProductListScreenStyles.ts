import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(8),
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: moderateScale(16),
    },
    footer: {
        position: 'absolute',
        bottom: moderateScale(16),
        left: moderateScale(16),
        right: moderateScale(16),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchInput: {
        marginBottom: moderateScale(10),
        backgroundColor: '#f4f4f4',
        borderRadius: moderateScale(5),
    },
    priceInput: {
        marginBottom: moderateScale(10),
        backgroundColor: '#f4f4f4',
        borderRadius: moderateScale(5),
    },
    row: {
        justifyContent: 'space-between',
    },

    filterButton: {
        marginBottom: moderateScale(16),
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: moderateScale(16),
        backgroundColor: '#fff',
        borderRadius: moderateScale(8),
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        marginBottom: moderateScale(16),
    },

    additionalFilters: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: moderateScale(16),
    },
});
