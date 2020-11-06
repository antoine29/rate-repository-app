import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const style = StyleSheet.create({
    container: {
        display: 'flex',
        paddingTop: Constants.statusBarHeight,
        // backgroundColor: 
        // paddingLeft: '7%',
        // paddingRight: '7%',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignContent: 'center',
        // alignItems: 'center',  
    },
});

const AppBar = () => {
    return <View style={style.container}>
        <Text>AppBar</Text>
    </View>;
};

export default AppBar;