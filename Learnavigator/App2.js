import React from 'react';
import { Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from 'react-native-button';
import { createBottomTabNavigator ,createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    let tabBarLabel = 'Home';
    return { tabBarLabel };
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#945305' }}>
        <Text>Home!</Text>
        <Button
          containerStyle={{
            marginTop: 5,
            padding: 8,
            marginLeft: 70,
            marginRight:70,
            height: 40,
            borderRadius:6,
            backgroundColor:'#8B8682',
          }}
          style={{color:'#ECECEC', fontSize: 14}}
          onPress={() => this.props.navigation.navigate('Cloud')}>
          Go to CloudScreen
        </Button>
      </View>
    );
  }
}

class CloudScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let tabBarLabel = 'Cloud';
    return { tabBarLabel };
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#707070' }}>
        <Text>Settings!</Text>
        <Button
          containerStyle={{
            marginTop: 5,
            padding: 8,
            marginLeft: 70,
            marginRight:70,
            height: 40,
            borderRadius:6,
            backgroundColor:'#8B8682',
          }}
          style={{color:'#ECECEC', fontSize: 14}}
          onPress={() => this.props.navigation.navigate('App')}>
          Go to CloudScreen
        </Button>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let tabBarLabel = 'Setting';
    return { tabBarLabel };
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#707070' }}>
        <Text>Settings!</Text>
        <Button
          containerStyle={{
            marginTop: 5,
            padding: 8,
            marginLeft: 70,
            marginRight:70,
            height: 40,
            borderRadius:6,
            backgroundColor:'#8B8682',
          }}
          style={{color:'#ECECEC', fontSize: 14}}
          onPress={() => this.props.navigation.navigate('Home')}>
          Go to CloudScreen
        </Button>
      </View>
    );
  }
}

class AppScreen extends React.Component {
 static  navigationOptions = ({ navigation }) => {
   let tabBarLabel = 'App';
   return { tabBarLabel}
 };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7388C1' }}>
        <Text>Settings!</Text>
        <Button
          containerStyle={{
            marginTop: 5,
            padding: 8,
            marginLeft: 70,
            marginRight:70,
            height: 40,
            borderRadius:6,
            backgroundColor:'#8B8682',
          }}
          style={{color:'#ECECEC', fontSize: 14}}
          onPress={() => this.props.navigation.navigate('Settings')}>
          Go to CloudScreen
        </Button>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
  Home: HomeScreen,
  Settings: SettingsScreen,
  App: AppScreen,
  Cloud: CloudScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home': {
            iconName = 'ios-home';
            break;
          }
          case 'Settings': {
            iconName = 'ios-settings';
            break;
          }
          case 'App': {
            iconName = 'ios-apps';
            break;
          }
          case 'Cloud': {
            iconName = 'ios-cloud';
            break;
          }
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);