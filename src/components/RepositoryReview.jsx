import React from 'react';
import { View } from 'react-native';
import { Card, Text, Avatar, IconButton } from 'react-native-paper';
import { useHistory } from "react-router-native";

const RepositoryReview = ({ review, showReviewActions = false, setReview }) => {
  const history = useHistory();
  return (
    <Card>
      <Card.Title
        title={review.user.username}
        subtitle={new Date(review.createdAt).toLocaleDateString('en-us')}
        left={() => <Avatar.Text size={40} label={review.rating} />}
        right={(props) => showReviewActions ?
          <View style={{ flexDirection: 'row' }}>
            <IconButton icon='source-repository' onPress={() => {
              console.log(`going to repo`, review);
              history.push(`/repositories/${review.repositoryId}`);
            }} />
            <IconButton icon='delete' onPress={() => {setReview(review.id);}}/>
          </View> : null
        }
      />
      <Card.Content>
        <Text>{review.text}</Text>
      </Card.Content>
    </Card>
  );
};

export default RepositoryReview;