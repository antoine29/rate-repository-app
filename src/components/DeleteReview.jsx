import React from 'react';
import { Dialog, Paragraph, Button } from 'react-native-paper';
import useDeleteReview from '../hooks/useDeleteReview';

const DeleteReview = ({ visibility, toggleVisibility, reviewIdToDelete }) => {
    const { _deleteReview, result } = useDeleteReview();
    return (
        <Dialog visible={visibility} onDismiss={toggleVisibility}>
            <Dialog.Title>Delete review</Dialog.Title>
            <Dialog.Content>
                <Paragraph>Are you sure you want to delete this review?</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
                <Button onPress={toggleVisibility}>Cancel</Button>
                <Button onPress={async ()=>{
                    console.log(`deleting review: ${reviewIdToDelete}`);
                    await _deleteReview({ variables: { reviewId: reviewIdToDelete}});
                    toggleVisibility();
                }}>Delete</Button>
            </Dialog.Actions>
        </Dialog>
    );
};

export default DeleteReview;