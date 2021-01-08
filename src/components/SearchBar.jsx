import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = ({ searchBarVisibility, searchKeyword, setSearchKeyword }) => {
    const onChangeSearch = query => setSearchKeyword(query);
    return searchBarVisibility ? 
    (
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchKeyword}
        />
    ) : null;
};

export default SearchBar;