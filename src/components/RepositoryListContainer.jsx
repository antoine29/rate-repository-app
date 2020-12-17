import React from 'react';
import useRepositories from '../hooks/useRepositories';
import RepositoryList from './RepositoryList';

const RepositoryListContainer = () => {
  const { response } = useRepositories();

  // Get the nodes from the edges array
  const repositories = response && response.edges ?
    response.edges.map(edge => edge.node) : [];

  return (
    <RepositoryList repositories={ repositories } />
  );
};

export default RepositoryListContainer;