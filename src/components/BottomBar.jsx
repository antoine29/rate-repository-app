import React, { useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import { useHistory, useLocation } from "react-router-native";
import { useApolloClient } from '@apollo/client';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import AuthStorageContext from '../contexts/AuthStorageContext';

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
    const _tabs = [
        { key: 'repos', title: 'Repos', icon: 'source-repository', path: '/repositories', private: false },
        { key: 'addReview', title: 'Add Review', icon: 'plus-box', path: '/addReview', private: true },
        { key: 'signIn', title: 'Sign in', icon: 'account', path: '/signIn', private: false },
        { key: 'signOut', title: 'Sign out', icon: 'account', path: '/signOut', private: true }
    ];
    const updateTabs = () => {
        let allowedTabs = _tabs.filter(_tab => authorizedUser.authorizedUser ? true : !_tab.private);
        if(authorizedUser.authorizedUser) allowedTabs = _tabs.filter(_tab => _tab.key !== 'signIn');
        return allowedTabs;
    };

    let filteredTabs = updateTabs();
    const [tabs, setTabs] = React.useState(filteredTabs);

    useEffect(()=>{
        let updatedTabs = updateTabs();
        console.log('updated tabs:', updatedTabs);
        setTabs(updatedTabs);
    }, [authorizedUser.authorizedUser]);

    const resolveRouteTabIndex = route => {
        switch(route){
            case tabs[0].path: return 0;
            case tabs[1].path: return 1;
            default: return 0;
        }
    };

    useEffect(() => {
        if(location) setIndex(resolveRouteTabIndex(location.pathname));
        let updatedTabs = updateTabs();
        setTabs(updatedTabs);
    }, [location, index]);
    
    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });

    return (
        <BottomNavigation
            style={styles.bottomBar}
            navigationState={{ index, routes: tabs }}
            onIndexChange={setIndex}
            renderScene={({ route, jumpTo }) => null}
            onTabPress={({route}) => {
                const deleteToken = async() => {
                    await context.authStorage.removeAccessToken();
                    await apolloClient.resetStore();
                };
                
                if(route.path === '/signOut'){
                    if(authorizedUser){
                        deleteToken();
                        history.push('/repositories');
                    }
                }
                else{
                    history.push(route.path);
                }
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