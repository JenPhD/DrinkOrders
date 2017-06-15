import React, { Component } from 'react';
import { ScrollView, ListView } from 'react-native';
import data from './OrderList.json'
import OrderDetail from './OrderDetail';

class OrderList extends Component {
  state = { orders: [] };

  componentWillMount() {
    this.setState({ orders: data });
  }

  renderOrders() {
    return this.state.orders.map(order =>
      <OrderDetail key={order.id} order={order} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderOrders()}
      </ScrollView>
    );
  };
}

export default OrderList;