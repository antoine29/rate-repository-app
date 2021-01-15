import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Card, Text, Avatar } from 'react-native-paper';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import useRepoReviews from '../hooks/useRepoReviews';
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

const RepositoryListItemContainer = () => {
  const { id } = useParams();
  const [getRepository, { loading: getRepositoryLoading, data: getRepositoryData, error: getRepositoryError }] = useRepository();
  const { reviews, fetchNextReviewPage, loading, error } = useRepoReviews();

  useEffect(() => {
    console.log(`setting repoView ${id}`);
    if (id !== null) {
      getRepository({ variables: { id: id } });
      fetchNextReviewPage(id);
    }
  }, [id]);

  if (getRepositoryLoading) return (<Text>loading!</Text>);
  if (getRepositoryError) return (<Text>Error!</Text>);
  if (getRepositoryData !== undefined) {
    if (getRepositoryData.repository !== undefined) {
      return (
        <FlatList
          data={[getRepositoryData.repository, ...reviews]}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item, index }) =>
            index === 0 ?
              <RepositoryListItem key={index} repository={item} showGoToRepoBttn /> :
              <RepositoryReview key={index} review={item.node} />
          }
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => {
            console.log('Review list end reached');
            if (reviews.length > 0) fetchNextReviewPage(id, reviews[reviews.length - 1].cursor);
          }}
        />
      );
    }
  }

  return null;
};

const RepositoryReview = ({ review }) => {
  return (
    <Card>
      <Card.Title
        title={review.user.username}
        subtitle={new Date(review.createdAt).toLocaleDateString('en-us')}
        left={() => <Avatar.Text size={40} label={review.rating} />}
      // right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
      />
      <Card.Content>
        <Text>{review.text}</Text>
      </Card.Content>
    </Card>
  );
};

export default RepositoryListItemContainer;