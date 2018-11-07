import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TestView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'M A TEST VIEW COMPONENT!! </Text>
        <View style={ {flex:0.3, width: '20%', backgroundColor: 'blue'}}></View>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#088A85',
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
      opacity: 0.6,
    },
  });