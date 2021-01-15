import React from 'react';
import { Card, Text, Avatar } from 'react-native-paper';

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

export default RepositoryReview;