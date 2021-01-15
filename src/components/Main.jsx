import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Portal } from 'react-native-paper';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryListContainer from './RepositoryListContainer';
import RepositoryListItemContainer from './RepositoryListItemContainer';
import SignInFormContainer from './SignInFormContainer';
import SignUpFormContainer from './SignUpFormContainer';
import AddReviewFormContainer from './AddReviewFormContainer';
import ReviewListContainer from './ReviewListContainer';
import PickOrderMenu from './PickOrderMenu';
import SearchBar from './SearchBar';
import AppBar from './AppBar';
import BottomBar from './BottomBar';
import useSortMenuVisibility from '../hooks/useSortMenuVisibility';
import useSortMenuState from '../hooks/useSortMenuState';
import useSearchBarState from '../hooks/useSearchBarState';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.colors.mainBackground,
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
  },
  portalView: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
  
});

const Main = () => {
  const  { sortMenuVisibility, toggleSortMenuVisibility, closeSortMenu } = useSortMenuVisibility();
  const  { sortMenuCriteria, setSortMenuCriteria, sortMenuDirection, setSortMenuDirection } = useSortMenuState();
  const  { searchBarVisibility, toggleSearchBarVisibility, searchKeyword, setSearchKeyword } = useSearchBarState();
  return (
    <View style={styles.container}>
      <AppBar toggleSortMenuVisibility={toggleSortMenuVisibility} toggleSearchBarVisibility={toggleSearchBarVisibility} />
      <Portal>
        <View style={styles.portalView}>
          <PickOrderMenu
            sortMenuVisibility={sortMenuVisibility} closeSortMenu={closeSortMenu}
            sortMenuCriteria={sortMenuCriteria} setSortMenuCriteria={setSortMenuCriteria}
            sortMenuDirection={sortMenuDirection} setSortMenuDirection={setSortMenuDirection} />
        </View>
      </Portal>
      <SearchBar searchBarVisibility={searchBarVisibility} searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
      <Switch>
        <Route path='/' exact>
          <RepositoryListContainer sortMenuCriteria={sortMenuCriteria} sortMenuDirection={sortMenuDirection} searchKeyword={searchKeyword}/>
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
        <Route path='/myReviews' exact>
          <ReviewListContainer />
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