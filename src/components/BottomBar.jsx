import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import { useHistory } from "react-router-native";
import Toast from './Toast';

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
        <View style={styles.bottomBar}>
            <Toast />
            <BottomNavigation
                style={styles.bar}
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={({ route, jumpTo }) => null}
                onTabPress={({route}) => {
                    console.log('going to:', route.path);
                    history.push(route.path);
                }}
            />
        </View>
    );
};

export default BottomBar;

const styles = StyleSheet.create({
    bottomBar: {
        elevation: 8,
        position: 'absolute',
        // height: 95,
        left: 0,
        bottom: 0,
        right: 0
    },
    bar: {
        height: 56,
    }
});