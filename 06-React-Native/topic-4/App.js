import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import TabNavegator from './components/TabNavegator';


// import Screen from './components/screen';
// import Screen2 from './components/screen2';

// export default createBottomTabNavigator({
//   Page1:  Screen,
//   Page2:  Screen2 ,
// });

export default class App extends React.Component {
  render() {
    return (
      <TabNavegator/>
    );
  }
}
