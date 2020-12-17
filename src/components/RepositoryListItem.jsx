import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
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

const RepositoryListItem = ({ repository }) => {
  return (
    <Card testID={`repo-${repository.id}`}>
      <Card.Title
        title={repository.fullName}
        subtitle={repository.description}
        left={() => <Image style={styles.avatarPic} source={{ uri: repository.ownerAvatarUrl }} />}
      // right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
      />
      <Card.Content>
        <View style={styles.row}>
          <View style={{ width: '10%', backgroundColor: '#FFFFFF' }} />
          <View style={{ backgroundColor: '#4711BA', borderRadius: 5 }}>
            <Text style={{ padding: 5 }}>
              {repository.language}
            </Text>
          </View>
        </View>
        <View style={[styles.row, styles.chipRow]}>
          <RepoChip bold={repository.stargazersCount} content={"Stars"} />
          <RepoChip bold={repository.forksCount} content={"Forks"} />
          <RepoChip bold={repository.reviewCount} content={"Reviews"} />
          <RepoChip bold={repository.ratingAverage} content={"Rating"} />
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

export default RepositoryListItem;