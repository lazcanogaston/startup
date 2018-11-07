import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TestView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={{height: 150, backgroundColor: 'black'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
        <View style={{width: 50, height: 150, backgroundColor: 'blue'}} />
      
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'stretch',
      top: '5%',
      backgroundColor: '#088A85',
      //alignItems: 'center',   
      justifyContent: 'center',
      width:'100%',
      opacity: 0.6,
    },
  });