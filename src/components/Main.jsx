import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryListContainer from './RepositoryListContainer';
import RepositoryListItemContainer from './RepositoryListItemContainer';
import SignInFormContainer from './SignInFormContainer';
import SignUpFormContainer from './SignUpFormContainer';
import AddReviewFormContainer from './AddReviewFormContainer';
import PickOrderMenu from './PickOrderMenu';
import AppBar from './AppBar';
import BottomBar from './BottomBar';
import useSortMenuVisibility from '../hooks/useSortMenuVisibility';
import useSortMenuState from '../hooks/useSortMenuState';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.colors.mainBackground,
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const  { sortMenuVisibility, toggleSortMenuVisibility, closeSortMenu } = useSortMenuVisibility();
  const  { sortMenuCriteria, setSortMenuCriteria, sortMenuDirection, setSortMenuDirection } = useSortMenuState();
  return (
    <View style={styles.container}>
      <AppBar toggleSortMenuVisibility={toggleSortMenuVisibility}/>
      <PickOrderMenu sortMenuVisibility={sortMenuVisibility} closeSortMenu={closeSortMenu} setSortMenuCriteria={setSortMenuCriteria} setSortMenuDirection={setSortMenuDirection}/>
      <Switch>
        <Route path='/' exact>
          <RepositoryListContainer sortMenuCriteria={sortMenuCriteria} sortMenu={sortMenuDirection}/>
        </Route>
        <Route path='/repositories' exact>
          <RepositoryListContainer />
        </Route>
        <Route path='/repositories/:id' exact>
          <RepositoryListItemContainer />
        </Route>
        <Route path='/addReview' exact>
          <AddReviewFormContainer />
        </Route>
        <Route path='/signIn' exact>
          <SignInFormContainer />
        </Route>
        <Route path='/signUp' exact>
          <SignUpFormContainer />
        </Route>
        <Redirect to='/' />
      </Switch>
      <BottomBar />
    </View>
  );
};

export default Main;