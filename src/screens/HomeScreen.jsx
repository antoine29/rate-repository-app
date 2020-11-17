// import React, { useContext } from 'react';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import AppBar from '../components/AppBar';
import BottomBar from '../components/BottomBar';
import RepositoryList from '../components/RepositoryList';
// import { AuthContext } from '../navigation/AuthProvider';
// import FormButton from '../components/FormButton';

const HomeScreen = () => {
    //   const { user, logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <AppBar />
            {/* <Title>Home Screen</Title>
            <Title>All chat rooms will be listed here</Title> */}
            <RepositoryList />
            <BottomBar />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#f5f5f5',
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    }
});