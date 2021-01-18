import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import RepositoryReview from '../components/RepositoryReview';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewListContainer = ({ toggleDeleteReviewVisibility, setReviewIdToDelete }) => {
    const authorizedUser = useAuthorizedUser(true);
    const setReview = id => {
        console.log(`setting deleting review: ${id}`);
        toggleDeleteReviewVisibility();
        setReviewIdToDelete(id);
    };

    return (
        authorizedUser.authorizedUser && authorizedUser.authorizedUser.reviews ?
            <FlatList
                data={authorizedUser.authorizedUser.reviews.edges}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item, index }) =>
                    <RepositoryReview
                        key={index}
                        review={item.node}
                        showReviewActions
                        setReview={setReview}/>}  
            /> : null
    );
};


export default ReviewListContainer;