import React from 'react';
import { View } from 'react-native';
import styles from './styles/styles.js';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.littleBox, styles.bRadius]}/>
        <View style={[styles.mediumBox, styles.bRadius]}/>
        <View style={[styles.bigBox, styles.bRadius]}/>  
      </View>
    );
  }
}


