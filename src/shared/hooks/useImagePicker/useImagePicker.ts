import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

export const useImagePicker = (initialImageUri: string | null = null) => {
    const [imageUri, setImageUri] = useState<string | null>(initialImageUri);

    const pickImage = async () => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'You need to grant permission to access the gallery.');
                return;
            }

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.8,
            });

            if (!result.canceled && result.assets) {
                setImageUri(result.assets[0].uri);
            }
        } catch (error) {
            console.error('Error picking image:', error);
            Alert.alert('Error', 'An error occurred while picking the image.');
        }
    };

    return { imageUri, setImageUri, pickImage };
};
