import { useState } from 'react';

const useDeleteReviewState = () => {
    const [deleteReviewVisibility, setDeleteReviewVisibility] = useState(false);
    const [reviewIdToDelete, setReviewIdToDelete] = useState(null);
    
    const toggleDeleteReviewVisibility = () => {
        setDeleteReviewVisibility(!deleteReviewVisibility);
        if(!deleteReviewVisibility){
            setReviewIdToDelete(null);
        }
    };

    return {
        deleteReviewVisibility,
        toggleDeleteReviewVisibility,
        reviewIdToDelete,
        setReviewIdToDelete
    };
};

export default useDeleteReviewState;