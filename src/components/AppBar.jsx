import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useLocation } from "react-router-native";

const getAppBarTitle = pathName => {
    switch(pathName){
        case '/': {return 'Repositories';}
        case '/repositories': {return 'Repositories';}
        case '/addReview': {return 'Adding review';}
        case '/myReviews': {return 'My reviews';}
        case '/signIn': {return 'Sign In';}
        case '/signUp': {return 'Sign Up';}
        default:{
            if(pathName.includes('/repositories/')) return 'Repository';
            return '';
        }
    }
};

const AppBar = ({ toggleSearchBarVisibility, toggleSortMenuVisibility }) => {
    const location = useLocation();
    return (
        <Appbar.Header style={styles.appBar}>
            {/* <Appbar.BackAction onPress={_goBack} /> */}
            {/* <Appbar.Content title={getAppBarTitle(location.pathname)} subtitle="Subtitle" /> */}
            <Appbar.Content title={getAppBarTitle(location.pathname)} />
            {location && location.pathname === '/' || location.pathname === '/repositories' &&
            <>
                <Appbar.Action icon="magnify" onPress={() => {toggleSearchBarVisibility();}}/>
                <Appbar.Action icon="sort" onPress={() => {toggleSortMenuVisibility();}}/>
            {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
            </>}
        </Appbar.Header>
    );
};

export default AppBar;

const styles = StyleSheet.create({
    appBar: {
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // top:0
        // bottom: 0,
        alignSelf: 'stretch'
    },
});