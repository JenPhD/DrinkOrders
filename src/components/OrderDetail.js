import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


const OrderDetail = ({ order }) => {
  const { id, menuItem1, menuItem1Count, menuItem2, menuItem2Count } = order;
  const {
    headerContentStyle,
    headerTextStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{id}</Text>
          <Text>{menuItem1Count} {menuItem1}</Text>
          <Text>{menuItem2Count} {menuItem2}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  }
};

export default OrderDetail;