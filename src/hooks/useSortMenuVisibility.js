import { useState } from 'react';

const useSortMenuVisibility = () => {
    const [sortMenuVisibility, setSortMenuVisibility] = useState(false);
    const toggleSortMenuVisibility = () => {setSortMenuVisibility(!sortMenuVisibility);};
    const closeSortMenu = () => {setSortMenuVisibility(false);};
    return {
        sortMenuVisibility,
        toggleSortMenuVisibility,
        closeSortMenu
    };
};

export default useSortMenuVisibility;