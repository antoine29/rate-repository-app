import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import { useHistory } from "react-router-native";

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const BottomBar = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'repos', title: 'Repos', icon: 'source-repository', path: '/' },
        { key: 'myRepos', title: 'My repos', icon: 'account', path: '/signIn' }
    ]);
    const history = useHistory();
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
                console.log('going to:', route.path);
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
        height: 56,
        left: 0,
        bottom: 0,
        right: 0
    }
});