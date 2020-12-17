import React from 'react';
import { FlatList, View, StyleSheet, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';

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

const RepositoryListContainer = ({repositories}) => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item, index }) =>
        <RepoCard key={index} repo={item} />
      }
    />
  );
};

const RepoCard = ({ repo }) => {
  return (
    <Card testID={`repo-${repo.id}`}>
      <Card.Title
        title={repo.fullName}
        subtitle={repo.description}
        left={() => <Image style={styles.avatarPic} source={{ uri: repo.ownerAvatarUrl }} />}
      // right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
      />
      <Card.Content>
        <View style={styles.row}>
          <View style={{ width: '10%', backgroundColor: '#FFFFFF' }} />
          <View style={{ backgroundColor: '#4711BA', borderRadius: 5 }}>
            <Text style={{ padding: 5 }}>
              {repo.language}
            </Text>
          </View>
        </View>
        <View style={[styles.row, styles.chipRow]}>
          <RepoChip bold={repo.stargazersCount} content={"Stars"} />
          <RepoChip bold={repo.forksCount} content={"Forks"} />
          <RepoChip bold={repo.reviewCount} content={"Reviews"} />
          <RepoChip bold={repo.ratingAverage} content={"Rating"} />
        </View>
      </Card.Content>
    </Card>
  );
};

const RepoChip = ({ bold, content }) => {
  return (
    <View style={styles.chip}>
      <Text style={{ fontWeight: 'bold' }}>
        {bold}
      </Text>
      <Text>
        {content}
      </Text>
    </View>
  );
};

export default RepositoryListContainer;