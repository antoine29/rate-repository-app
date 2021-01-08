import { useState } from 'react';

const useSearchBarState = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchBarVisibility, setSearchBarVisibility] = useState(false);

    const toggleSearchBarVisibility = () => setSearchBarVisibility(!searchBarVisibility);
    return {
        searchBarVisibility,
        toggleSearchBarVisibility,
        searchKeyword,
        setSearchKeyword
    };
};

export default useSearchBarState;