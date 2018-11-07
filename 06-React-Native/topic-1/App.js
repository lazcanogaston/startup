import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestView from './components/TestView'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MY APP</Text>
        <TestView/> 
      
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',  
    alignItems: 'center', 
    width: '100%',
    marginTop: '10%',
  },
});
