import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const AppBar = () => {
    return (
        <Appbar.Header style={styles.appBar}>
        {/* <Appbar.Header style={styles.appBar}> */}
        {/* <Appbar style={styles.top}> */}
            {/* <Appbar.BackAction onPress={_goBack} /> */}
            <Appbar.BackAction />
            <Appbar.Content title="Repo App" subtitle="Subtitle" />
            {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
            <Appbar.Action icon="magnify" />
            {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
            {/* <Appbar.Action icon="dots-vertical" /> */}
        {/* </Appbar> */}
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