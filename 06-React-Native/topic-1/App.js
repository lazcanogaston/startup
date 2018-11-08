import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import TestView from './components/TestView'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MY APP</Text>
        
        <View style={{marginTop: '5%'}}>   
          <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          /> 
          <Image style={{marginTop: '5%', width: 120, height: 80}}
            source={require('./media/landscape4.jpg')}
          />
        </View>

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
