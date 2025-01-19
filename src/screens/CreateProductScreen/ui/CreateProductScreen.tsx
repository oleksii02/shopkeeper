import React, {useState} from 'react';
import {View, Image, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {styles} from './CreateProductScreenStyles.ts';
import {FormData} from '@/shared/types/formData.ts';
import {useImagePicker} from '@/shared/hooks/useImagePicker/useImagePicker.ts';
import {useCreateProduct} from '@/shared/hooks/useCreateProduct/useCreateProduct.ts';
import InputComponent from '@/shared/ui/InputComponent/InputComponent.tsx';
import MenuComponent from '@/shared/ui/MenuComponent/MenuComponent.tsx';
import ButtonComponent from '@/shared/ui/ButtonComponent/ButtonComponent.tsx';
import SwitchComponent from '@/shared/ui/SwitchComponent/SwitchComponent.tsx';

const CreateProductScreen = () => {
    const {createProduct} = useCreateProduct();
    const {imageUri, pickImage, setImageUri} = useImagePicker();
    const [menuVisible, setMenuVisible] = useState(false);
    const [category, setCategory] = useState<string>('');
    const {control, handleSubmit, formState: {errors}, reset} = useForm<FormData>({
        defaultValues: {
            title: '',
            price: '',
            description: '',
            published: false,
            category: '',
        },
    });

    const onSubmit = async (data: FormData) => {
        createProduct(data, imageUri, category, reset, setImageUri, setCategory);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.header}>Create New Product</Text>

                <Controller
                    name="title"
                    control={control}
                    rules={{required: {value: true, message: 'Title is required.'}}}
                    render={({field: {onChange, value}}) => (
                        <InputComponent
                            label="Title"
                            value={value}
                            onChangeText={onChange}
                            error={errors.title}
                            helperText={errors.title?.message}
                        />
                    )}
                />

                <Controller
                    name="price"
                    control={control}
                    rules={{
                        required: {value: true, message: 'Price is required.'},
                        pattern: {
                            value: /^\d+(\.\d{1,2})?$/,
                            message: 'Enter a valid price.',
                        },
                    }}
                    render={({field: {onChange, value}}) => (
                        <InputComponent
                            label="Price"
                            value={value}
                            keyboardType="numeric"
                            onChangeText={onChange}
                            error={errors.price}
                            helperText={errors.price?.message}
                        />
                    )}
                />

                <Controller
                    name="description"
                    control={control}
                    rules={{required: {value: true, message: 'Description is required.'}}}
                    render={({field: {onChange, value}}) => (
                        <InputComponent
                            label="Description"
                            value={value}
                            onChangeText={onChange}
                            multiline
                            error={errors.description}
                            helperText={errors.description?.message}
                        />
                    )}
                />

                <MenuComponent
                    visible={menuVisible}
                    onDismiss={() => setMenuVisible(!menuVisible)}
                    anchorText={category || 'Select Category'}
                    options={['Electronics', 'Clothing', 'Home', 'Books']}
                    onSelect={(cat) => {
                        setCategory(cat);
                        setMenuVisible(false);
                    }}
                />

                <View style={styles.imagePickerContainer}>
                    <ButtonComponent onPress={pickImage}>Pick Image</ButtonComponent>
                    {imageUri && <Image source={{uri: imageUri}} style={styles.imagePreview}/>}
                </View>

                <Controller
                    name="published"
                    control={control}
                    render={({field: {onChange, value}}) => (
                        <SwitchComponent
                            label="Published"
                            value={value}
                            onValueChange={onChange}
                        />
                    )}
                />

                <ButtonComponent onPress={handleSubmit(onSubmit)}>Submit</ButtonComponent>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default CreateProductScreen;
