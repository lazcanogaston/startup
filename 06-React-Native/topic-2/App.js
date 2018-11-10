import React from 'react';
import { View } from 'react-native';
import styles from './styles/styles.js';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.Box_1, styles.bRadius]}/>
        <View style={[styles.Box_2, styles.bRadius]}/>
        <View style={[styles.Box_3, styles.bRadius]}/>  
      </View>
    );
  }
}


