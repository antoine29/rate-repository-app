import React from 'react';
import { Text } from 'react-native-paper';
import useRepositories from '../hooks/useRepositories';
import RepositoryList from './RepositoryList';

const RepositoryListContainer = ({ sortMenuCriteria, sortMenuDirection, searchKeyword }) => {
  const { response, loading } = useRepositories(sortMenuCriteria, sortMenuDirection, searchKeyword);

  if(loading) return(<Text>Loading...</Text>);

  // Get the nodes from the edges array
  const repositories = response && response.edges ? response.edges.map(edge => edge.node) : [];

  return (
    <RepositoryList repositories={ repositories } />
  );
};

export default RepositoryListContainer;