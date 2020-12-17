import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SignInFormContainer from './SignInFormContainer';
import AppBar from './AppBar';
import BottomBar from './BottomBar';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.colors.mainBackground,
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signIn' exact>
          <SignInFormContainer />
        </Route>
        <Redirect to='/' />
      </Switch>
      <BottomBar />
    </View>
  );
};

export default Main;