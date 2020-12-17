import React from 'react';
import { FlatList, View, StyleSheet, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';
import RepositoryListItem from './RepositoryListItem';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  separator: {
    height: 10,
  },
  avatarPic: {
    width: 50,
    height: 50,
  },
  chipRow: {
    justifyContent: 'space-around',
    marginTop: 10
  },
  chip: {
    alignItems: 'center',
    alignContent: 'center',
    padding: 4
  },
  lastItemFix: {
    height: '25px'
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = ({repositories}) => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item, index }) =>
        // <RepoCard key={index} repo={item} />
        <RepositoryListItem key={index} repository={item} />
      }
    />
  );
};

export default RepositoryList;