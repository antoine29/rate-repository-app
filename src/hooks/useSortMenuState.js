import { useState } from 'react';

const useSortMenuState = () => {
    const [sortMenuCriteria, setSortMenuCriteria] = useState('RATING_AVERAGE');
    const [sortMenuDirection, setSortMenuDirection] = useState('DESC');

    return {
        sortMenuCriteria, setSortMenuCriteria,
        sortMenuDirection, setSortMenuDirection
    };
    
};

export default useSortMenuState;