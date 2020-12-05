import React from 'react';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const { repositories } = useRepositories();

  // Get the nodes from the edges array
  const repositoryNodes = repositories && repositories.edges ?
    repositories.edges.map(edge => edge.node) : [];

  return (
    <RepositoryListContainer repositories={ repositoryNodes } />
  );
};

export default RepositoryList;