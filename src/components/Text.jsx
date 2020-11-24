import React from 'react';
import { Text as NativeText, StyleSheet, Platform } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: Platform.select({
            android: theme.fonts.android,
            ios: theme.fonts.ios,
            default: theme.fonts.default
        }),
        fontWeight: theme.fontWeights.normal,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorError: {
        color: theme.colors.error,
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
    const textStyle = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'primary' && styles.colorPrimary,
        color === 'error' && styles.colorError,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontWeight === 'bold' && styles.fontWeightBold,
        style,
    ];

    return <NativeText style={textStyle} {...props} />;
};

export const SubTitle = ({ style, ...props }) => {
    const subTitleStyle = [
        styles.text,
        styles.colorPrimary,
        styles.fontSizeSubheading,
        styles.fontWeightBold,
        style
    ];
    
    return <NativeText style={subTitleStyle} {...props} />;
};

export const TextBody = ({ style, ...props }) => {
    const textBodyStyle = [
        styles.text,
        styles.colorTextSecondary,
        style
    ];
    
    return <NativeText style={textBodyStyle} {...props} />;
};

export default Text;