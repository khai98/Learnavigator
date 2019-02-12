import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  // static navigationOptions navigationOptionslà một đối tượng hoặc một hàm trả về một đối tượng có chứa các tùy chọn cấu hình khác nhau. Cái chú
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              // co itemId la id
              otherParam: 'anything you want here',
              // va Param muon ghi
            });
          }}
        />
      </View>
    );
  };
};