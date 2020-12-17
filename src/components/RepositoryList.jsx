import React from 'react';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const { response } = useRepositories();

  // Get the nodes from the edges array
  const repositories = response && response.edges ?
    response.edges.map(edge => edge.node) : [];

  return (
    <RepositoryListContainer repositories={ repositories } />
  );
};

export default RepositoryList;