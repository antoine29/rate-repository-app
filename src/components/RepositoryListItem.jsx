import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Card, Text, Avatar } from 'react-native-paper';
import { useHistory } from "react-router-native";
import * as WebBrowser from 'expo-web-browser';

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

const RepositoryListItem = ({ repository, showGoToRepoBttn }) => {
  const history = useHistory();
  if (repository) {
    return (
      <Card testID={`repo-${repository.id}`} onPress={() => { console.log('going'); history.push(`/repositories/${repository.id}`); }} >
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
          {showGoToRepoBttn &&
          <>
            <Card.Actions>
              <Button mode='contained' compact dark>Add review</Button>
              <Button mode='contained' compact dark onPress={() => {WebBrowser.openBrowserAsync(repository.url);}}>
                Open in github
              </Button>
            </Card.Actions>
            {repository.reviews.edges.map(({node}) => <RepositoryReview key={node.id} review={node} />)}
          </>}
        </Card.Content>
      </Card>
    );
  }

  return null;
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

const RepositoryReview = ({review}) => {
  console.log('printing review:', review.createdAt);
  return(
    <Card>
      <Card.Title
        title={review.user.username}
        subtitle={new Date(review.createdAt).toLocaleDateString('en-us')}
        left={() => <Avatar.Text size={40} label={review.rating} />}
        // right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
      />
      <Card.Content>
        <Text>
          {review.text}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default RepositoryListItem;