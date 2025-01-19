import React, {useEffect, useState} from 'react';
import {View, FlatList, Modal} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '@/entities/products/model/slices/productsSlice';
import {AppDispatch, RootState} from '@/app/providers/StoreProvider/config/store';
import AppButton from '@/shared/ui/Button/Button.tsx';
import ProductCard from '@/features/ProductCard/ui/ProductCard.tsx';
import {TextInput, Text} from 'react-native-paper';
import {styles} from './ProductListScreenStyles.ts';
import ButtonComponent from '@/shared/ui/ButtonComponent/ButtonComponent.tsx';
import SwitchComponent from '@/shared/ui/SwitchComponent/SwitchComponent.tsx';
import {filterProducts} from '@/shared/utils/filterProducts/filterProducts.ts';

const ProductListScreen = ({navigation}) => {
    const dispatch = useDispatch<AppDispatch>();
    const [showCreated, setShowCreated] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [filterPublished, setFilterPublished] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const {items: apiProducts} = useSelector((state: RootState) => state.products);
    const {items: createdProducts} = useSelector((state: RootState) => state.createdProduct);

    const data = filterProducts({
        products: showCreated ? createdProducts : apiProducts,
        searchQuery,
        minPrice: minPrice || '0',
        maxPrice: maxPrice || undefined,
        filterPublished,
    });

    useEffect(() => {
        dispatch(fetchProducts(8));
    }, [dispatch]);

    const renderProduct = ({item}) => (
        <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetail', {productId: item.id, isCreated: showCreated})}
        />
    );

    return (
        <View style={styles.container}>
            <TextInput
                label="Search"
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
                style={styles.searchInput}
                placeholder="Search products..."
            />

            <ButtonComponent mode="contained" onPress={() => setModalVisible(true)} style={styles.filterButton}>
                Filters
            </ButtonComponent>

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Filters</Text>

                        <SwitchComponent
                            label="Show Created Products"
                            value={showCreated}
                            onValueChange={setShowCreated}
                        />

                        <SwitchComponent
                            label="Show Only Published"
                            value={filterPublished}
                            onValueChange={setFilterPublished}
                        />

                        <TextInput
                            label="Min Price"
                            value={minPrice}
                            onChangeText={setMinPrice}
                            keyboardType="numeric"
                            style={styles.priceInput}
                            placeholder="Min price"
                        />
                        <TextInput
                            label="Max Price"
                            value={maxPrice}
                            onChangeText={setMaxPrice}
                            keyboardType="numeric"
                            style={styles.priceInput}
                            placeholder="Max price"
                        />

                        <ButtonComponent mode="outlined" onPress={() => setModalVisible(false)}>
                            Close
                        </ButtonComponent>
                    </View>
                </View>
            </Modal>

            <FlatList
                data={data}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.row}
                showsVerticalScrollIndicator={false}
            />

            {!showCreated && (
                <View style={styles.footer}>
                    <AppButton title="8 Products" onPress={() => dispatch(fetchProducts(8))}/>
                    <AppButton title="16 Products" onPress={() => dispatch(fetchProducts(16))}/>
                    <AppButton title="All Products" onPress={() => dispatch(fetchProducts(20))}/>
                </View>
            )}
        </View>
    );
};

export default ProductListScreen;
