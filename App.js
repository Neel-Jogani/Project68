import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import fb from "./screens/fb";
import ins from './screens/in'
import {createAppContainer} from  'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
  render(){
    return(
      <AppContainer/>   
    )
  }
}

const TabNavigator=createBottomTabNavigator({
  FaceBook:{screen: fb},
  Instagram:{screen: ins},
})

const AppContainer= createAppContainer(TabNavigator);
