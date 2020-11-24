import React from 'react';
// import { FlatList, View, StyleSheet, TouchableHighlight, Image, Text } from 'react-native';
import { FlatList, View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { Avatar, Card, Chip, Subheading, Headline, Paragraph, Text } from 'react-native-paper';
import RepositoryItem from './RepositoryItem';

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

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
  {
    id: 'reduxjs.redux2',
    fullName: 'NEW reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
  {
    id: 'reduxjs.redux3',
    fullName: 'NEW reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  }
];

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const latItemFixStyle = [true && styles.lastItemFix ];
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item, index }) =>
        // <Text key={index}>{item.fullName}</Text>}
        // <RepositoryItem key={index} item={item}/>}
        // <RepoCard key={index} repo={item} style={[index === repositories.length-1 && styles.lastItemFix ]}/>}
        <RepoCard key={index} repo={item}/>
      }
    />
  );
};

const RepoCard = ({ repo }) => {
  return (
    <Card>
      <Card.Title
        title={repo.fullName}
        subtitle={repo.description}
        left={() => <Image style={styles.avatarPic} source={{ uri: repo.ownerAvatarUrl }} />}
      // right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
      />
      <Card.Content>
        <View style={ styles.row }>
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
    <View style={ styles.chip }>
      <Text style={{ fontWeight: 'bold' }}>
        {bold}
      </Text>
      <Text>
        {content}
      </Text>
    </View>
  );
};

export default RepositoryList;