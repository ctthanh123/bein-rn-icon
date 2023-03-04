import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CustomIconsProps {
    name: string;
    size?: number;
    tintColor?: string;
    colorLabel?: string;
    titleRight?: string;
}

const CustomIcons: React.FC<CustomIconsProps> = ({
    name,
    size = 16,
    tintColor = 'tomato',
    colorLabel,
    titleRight = '',

}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.labelDefault, { color: colorLabel }]}>{ name }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
    },
    labelDefault: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default CustomIcons;
