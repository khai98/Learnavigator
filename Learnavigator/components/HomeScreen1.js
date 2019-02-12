import React, {Component} from 'react';
import { View, Text} from 'react-native';

export default class HomeScreen extends Component {

  // static navigationOptions navigationOptionslà một đối tượng hoặc một hàm trả về một đối tượng có chứa các tùy chọn cấu hình khác nhau. Cái chú
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
};