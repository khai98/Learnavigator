import React, {Component} from 'react';
import HomeScreen from './components/HomeScreen.js';
import DetailsScreen from './components/DetailsScreen';
import { createAppContainer, createStackNavigator} from 'react-navigation'; // Version can be specified in package.json

// createStackNavigator Stacknavigator là một hàm (function) trả về một React component. Nó có thể nhận vào một đối tượng route configuration đã được định nghĩa từ trước. Do StackNavigator trả về một component nên chúng ta có thể export nó trực tiếp trong file App.js và coi nó như một root component.

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer/>;
  }
};