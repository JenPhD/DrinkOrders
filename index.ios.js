//Import a library to help create a component
import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './src/components/Header';
import OrderList from './src/components/OrderList';

//Create a component
//Self-closing tag if no text
const App = () =>
  (
    <View style={{ flex: 1 }}>
      <Header headerText={'Orders'} />
      <OrderList />
    </View>
  );

AppRegistry.registerComponent('DrinkOrders', () => App);
