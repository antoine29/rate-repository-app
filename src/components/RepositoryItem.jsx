import React from 'react';
import { View } from 'react-native';
import { SubTitle, TextBody} from './Text';
const RepositoryItem = ({ item }) => {
  return (
    <View>
      <SubTitle>{`Full name: ${item.fullName}`}</SubTitle>
      <TextBody>{`Description: ${item.description}`}</TextBody>
      <TextBody>{`Language: ${item.language}`}</TextBody>
      <TextBody>{`Stars ${item.forksCount}`}</TextBody>
      <TextBody>{`Forks ${item.stargazersCount}`}</TextBody>
      <TextBody>{`Reviews ${item.ratingAverage}`}</TextBody>
      <TextBody>{`Rating ${item.reviewCount}`}</TextBody>
    </View>
  );
};

export default RepositoryItem;