import * as React from 'react';
import { View } from 'react-native';
import { Menu } from 'react-native-paper';

const PickOrderMenu = ({ sortMenuVisibility, closeSortMenu, setSortMenuCriteria, setSortMenuDirection }) => {
  const _anchor = { x:400, y:100}; // ToDo: this could be the sortIconComp rather than just a coordinate
  return (
        <View>
            <Menu
                visible={sortMenuVisibility}
                onDismiss={closeSortMenu}
                anchor={_anchor}>
                <Menu.Item title="Latest repositories" onPress={() => {
                  setSortMenuCriteria('CREATED_AT');
                  setSortMenuDirection('ASC');
                  closeSortMenu();
                }} />
                <Menu.Item title="Highest rated repositories" onPress={() => {
                  setSortMenuCriteria('RATING_AVERAGE');
                  setSortMenuDirection('DESC');
                  closeSortMenu();
                }} />
                <Menu.Item title="Lowest rated repositories" onPress={() => {
                  setSortMenuCriteria('RATING_AVERAGE');
                  setSortMenuDirection('ASC');
                  closeSortMenu();
                }} />
            </Menu>
        </View>
  );
};

export default PickOrderMenu;