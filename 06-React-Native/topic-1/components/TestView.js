import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Box from './Box';
export default class TestView extends React.Component {
  render() {
    return (
        <View style={{flexDirection: 'row',width:'50%'}}>
          <ScrollView style={{height:'50%', backgroundColor: 'black'}}>
            <View style={styles.container}>
              <Box color="red" />
              <Box color="blue" />
              <Box color="pink" />
              <View style={{width: '80%', height: 100, backgroundColor: 'red'}} />
              <View style={{width: '50%', height: 150, backgroundColor: 'blue'}} />
              <View style={{width: '80%', height: 100, backgroundColor: 'red'}} />
              <View style={{width: '50%', height: 150, backgroundColor: 'blue'}} /> 
            </View>
          </ScrollView>
        </View>
        
      
      
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'stretch',
      
      //backgroundColor: '#088A85',
      //alignItems: 'center',   
      justifyContent: 'center',
   
      opacity: 0.6,
    },
  });