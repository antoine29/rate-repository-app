import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import RepositoryReview from '../components/RepositoryReview';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewListContainer = () => {
    const authorizedUser = useAuthorizedUser(true);

    return (
        authorizedUser.authorizedUser && authorizedUser.authorizedUser.reviews ?
            <FlatList
                data={authorizedUser.authorizedUser.reviews.edges}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item, index }) => <RepositoryReview key={index} review={item.node} />}              
            /> : null
    );
};


export default ReviewListContainer;