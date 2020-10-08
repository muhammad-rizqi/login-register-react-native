import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screen/core/Home';

const Drawer = createDrawerNavigator();
export default class appDrawer extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    );
  }
}
