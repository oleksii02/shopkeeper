import React from 'react';
import { Menu, Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const MenuComponent = ({ visible, onDismiss, anchorText, options, onSelect }) => {
    return (
        <Menu
            visible={visible}
            onDismiss={onDismiss}
            anchor={
                <Button mode="outlined" onPress={onDismiss} style={styles.button}>
                    {anchorText || 'Select Option'}
                </Button>
            }
        >
            {options.map((option) => (
                <Menu.Item
                    key={option}
                    onPress={() => onSelect(option)}
                    title={option}
                />
            ))}
        </Menu>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius:moderateScale(6),
        marginBottom: moderateScale(12),
    },
});

export default MenuComponent;
