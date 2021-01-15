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
        { key: 'myReviews', title: 'My Reviews', icon: 'message-draw', path: '/myReviews', private: true },
        { key: 'addReview', title: 'Add Review', icon: 'message-plus', path: '/addReview', private: true },
        { key: 'signIn', title: 'SignIn', icon: 'account-key', path: '/signIn', private: false },
        { key: 'signOut', title: 'SignOut', icon: 'account-remove', path: '/signOut', private: true },
        { key: 'signUp', title: 'SignUp', icon: 'account-plus', path: '/signUp', private: false },
    ];
    const updateTabs = () => {
        let allowedTabs = _tabs.filter(_tab => authorizedUser.authorizedUser ? true : !_tab.private);
        if(authorizedUser.authorizedUser) allowedTabs = _tabs.filter(_tab => _tab.key !== 'signIn' && _tab.key !== 'signUp');
        return allowedTabs;
    };

    let filteredTabs = updateTabs();
    const [tabs, setTabs] = React.useState(filteredTabs);

    useEffect(()=>{
        let updatedTabs = updateTabs();
        setTabs(updatedTabs);
    }, [authorizedUser.authorizedUser]);

    const resolveRouteTabIndex = route => {
        try{
            switch(route){
                case tabs[0].path: return 0;
                case tabs[1].path: return 1;
                case tabs[2].path: return 2;
                case tabs[3].path: return 3;
                case tabs[4].path: return 4;
                default: return 0;
            }
        }
        catch(error){
            console.log('Error resolving tab index');
           return 0; 
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