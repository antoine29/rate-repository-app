import React, { useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import { useHistory, useLocation } from "react-router-native";
import { useApolloClient } from '@apollo/client';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import AuthStorageContext from '../contexts/AuthStorageContext';
// import Toast from './Toast';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const BottomBar = () => {
    const context = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();
    const history = useHistory();
    const location = useLocation();
    const authorizedUser = useAuthorizedUser();
    const [index, setIndex] = React.useState(0);
    const [routes, setRoutes] = React.useState([
        { key: 'repos', title: 'Repos', icon: 'source-repository', path: '/' },
        { key: 'signIn', title: 'Sign in', icon: 'account', path: '/signIn' }
    ]);

    const checkTabs = () => {
        const routesWithSignOut = route =>
            route.key === 'signIn' && route.title === 'Sign in' ?
                { ...route, title: 'Sign out'} : route;

        const routesWithSingIn = route =>
            route.key === 'signIn' && route.title === 'Sign out' ?
                { ...route, title: 'Sign in'} : route;
        
        let _routes = [];
        if(authorizedUser) {
            _routes = authorizedUser.authorizedUser !== null ?
                routes.map(routesWithSignOut) : routes.map(routesWithSingIn);
        }
        else{
            _routes = routes.map(routesWithSingIn);
        }

        setRoutes(_routes);
    };

    const resolveRouteTabIndex = route => {
        switch(route){
            case routes[0].path: return 0;
            case routes[1].path: return 1;
        }
    };

    useEffect(() => {
        if(location)
            setIndex(resolveRouteTabIndex(location.pathname));

        checkTabs();
    }, [location, index]);
    
    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });

    return (
        <BottomNavigation
            style={styles.bottomBar}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={({ route, jumpTo }) => null}
            onTabPress={({route}) => {
                const deleteToken = async() => {
                    await context.authStorage.removeAccessToken();
                    await apolloClient.resetStore();
                };
                
                if(route.path === '/signIn')
                    if(authorizedUser)
                        deleteToken();
                
                history.push(route.path);
            }}
        />
    );
};

export default BottomBar;

const styles = StyleSheet.create({
    bottomBar: {
        elevation: 8,
        position: 'absolute',
        // height: 95,
        height: 65,
        left: 0,
        bottom: 0,
        right: 0
    },
    bar: {
        height: 56,
    }
});