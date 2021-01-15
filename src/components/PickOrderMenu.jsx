import React from 'react';
import { Dialog, RadioButton } from 'react-native-paper';

const labelizer = (sortCriteria, sortDirection) => {
    switch(sortCriteria){
        case 'CREATED_AT': return 'Latest repositories'; 
        case 'RATING_AVERAGE': {
            if(sortDirection === 'ASC') return 'Lowest rated repositories';
            if(sortDirection === 'DESC') return 'Highest rated repositories';
            return 'undefined sort option';
        }
    }
};

const PickOrderMenu = ({ sortMenuVisibility, closeSortMenu, setSortMenuCriteria, setSortMenuDirection, sortMenuCriteria, sortMenuDirection }) => {
    return (
        <Dialog visible={sortMenuVisibility} onDismiss={closeSortMenu}>
            <Dialog.Title>Repositories order</Dialog.Title>
            <Dialog.Content>
                <RadioButton.Group
                    value={labelizer(sortMenuCriteria, sortMenuDirection)}
                    onValueChange={value => {
                        switch(value){
                            case 'Latest repositories': {
                                setSortMenuCriteria('CREATED_AT');
                                setSortMenuDirection('ASC');
                                closeSortMenu();
                                break;
                            }
                            case 'Highest rated repositories': {
                                setSortMenuCriteria('RATING_AVERAGE');
                                setSortMenuDirection('DESC');
                                closeSortMenu();
                                break;
                            }
                            case 'Lowest rated repositories': {
                                setSortMenuCriteria('RATING_AVERAGE');
                                setSortMenuDirection('ASC');
                                closeSortMenu();
                                break;
                            }
                            default: {
                                console.log('Sorting option not found');
                                break;
                            }
                        }
                    }}
                >
                    <RadioButton.Item label='Latest repositories' value='Latest repositories' />
                    <RadioButton.Item label='Highest rated repositories' value='Highest rated repositories' />
                    <RadioButton.Item label='Lowest rated repositories' value='Lowest rated repositories' />
                </RadioButton.Group>
            </Dialog.Content>
            {/* <Dialog.Actions>
                <Button onPress={closeSortMenu}>Done</Button>
            </Dialog.Actions> */}
        </Dialog>
    );
};

export default PickOrderMenu;