import React from 'react';
import { View, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, HelperText} from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { styles } from './EditProductScreenStyles.ts';
import {handleDeleteProduct} from '@/shared/lib/handleDelete/deleteProduct.ts';
import {useImagePicker} from '@/shared/hooks/useImagePicker/useImagePicker.ts';
import {handleUpdateProduct} from '@/shared/lib/handleUpdateProduct/handleUpdateProduct.ts';
import ButtonComponent from '@/shared/ui/ButtonComponent/ButtonComponent.tsx';
import SwitchComponent from '@/shared/ui/SwitchComponent/SwitchComponent.tsx';

import { FormData } from '@/shared/types/formData.ts';
const EditProductScreen = ({ route, navigation }) => {
    const { product } = route.params;
    const dispatch = useDispatch();
    const { imageUri, pickImage, setImageUri } = useImagePicker(product.image);


    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: product,
    });


    const onSubmit = async (data: FormData) => {
        handleUpdateProduct({ data, imageUri, dispatch, navigation });
    };

    return (
        <View style={styles.container}>
            <Controller
                name="title"
                control={control}
                rules={{ required: 'Title is required.' }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        label="Title"
                        mode="outlined"
                        value={value}
                        onChangeText={onChange}
                        style={styles.input}
                        error={!!errors.title}
                        multiline
                    />
                )}
            />
            {errors.title && <HelperText type="error">{errors.title.message}</HelperText>}

            <Controller
                name="price"
                control={control}
                rules={{
                    required: 'Price is required.',
                    pattern: {
                        value: /^\d+(\.\d{1,2})?$/,
                        message: 'Enter a valid price.',
                    },
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        label="Price"
                        mode="outlined"
                        keyboardType="numeric"
                        value={value}
                        onChangeText={onChange}
                        style={styles.input}
                        error={!!errors.price}
                    />
                )}
            />
            {errors.price && <HelperText type="error">{errors.price.message}</HelperText>}

            <Controller
                name="description"
                control={control}
                rules={{ required: 'Description is required.' }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        label="Description"
                        mode="outlined"
                        value={value}
                        onChangeText={onChange}
                        style={[styles.input, styles.textarea]}
                        multiline
                    />
                )}
            />

                <Controller
                    name="published"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <SwitchComponent
                            label="Published"
                            value={value}
                            onValueChange={onChange}
                        />
                    )}
                />

            <View style={styles.imagePickerContainer}>
                <ButtonComponent onPress={pickImage}>Pick Image</ButtonComponent>
                {imageUri && <Image source={{ uri: imageUri }} style={styles.imagePreview} />}
            </View>

            <ButtonComponent mode="contained" onPress={handleSubmit(onSubmit)} style={styles.saveButton}>
                Save
            </ButtonComponent>
            <ButtonComponent
                textColor={'#B00020'}
                buttonColor={'#F1D1D3'}
                borderColor={'#B00020'}
                style={{borderColor:'#B00020'}}
                mode="outlined"
                onPress={() =>
                    handleDeleteProduct(product.id, dispatch, () => navigation.navigate('Products'))
                }
            >
                Delete
            </ButtonComponent>
        </View>
    );
};

export default EditProductScreen;
