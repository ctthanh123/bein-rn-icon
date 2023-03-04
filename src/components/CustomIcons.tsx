import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { iconsPaths } from '../resource';

export interface CustomIconsProps {
    name: 
        'link' | 
        'avatarFireMan' | 
        'avatarHacker' | 
        'avatarGamer' |
        'calendar' |
        'presentation' |
        'like';
    size?: number;
    tintColor?: string;
    colorLabel?: string;
    styleLabel?: object;
    labelRight?: string;
    onPress?: () => void;
    styleContainer?: object;
}

const CustomIcons: React.FC<CustomIconsProps> = ({
    name,
    size,
    tintColor,
    colorLabel,
    styleLabel,
    labelRight,
    onPress,
    styleContainer,
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, styleContainer]}
            onPress={onPress}
        >
            <Image
                source={iconsPaths[name]}
                style={[
                    styles.icon,
                    { tintColor },
                    { width: size, height: size },

                ]}
                resizeMode='contain'
            />
            {!!labelRight && (
                <Text
                    style={[
                        styles.labelDefault,
                        { color: colorLabel },
                        styleLabel,
                    ]}
                >
                    { labelRight }
                </Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 4,
    },
    icon: {
        width: 36,
        height: 36,
        tintColor: '#2f66b7',
    },
    labelDefault: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 4,
    },
});

export default CustomIcons;
