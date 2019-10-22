import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import FlatListExample from '../screens/FlatListExample';
import SectionListExample from '../screens/SectionListExample';


const TabNavigator = createMaterialTopTabNavigator({
    FlatList: FlatListExample,
    SectionList: SectionListExample,
}, {
    swipeEnabled: true
});

export default createAppContainer(createSwitchNavigator({
    Main: TabNavigator
}))
