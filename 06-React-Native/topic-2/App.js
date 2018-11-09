import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/styles.js';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.littleBox}></View>
        <View style={styles.mediumBox}></View>
        <View style={styles.bigBox}></View>  
      </View>
    );
  }
}


