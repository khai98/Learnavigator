import HomeScreen from './components/HomeScreen.js';
import DetailsScreen from './components/DetailsScreen';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);