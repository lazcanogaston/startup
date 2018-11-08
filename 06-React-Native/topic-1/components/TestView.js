import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import Box from './Box';
export default class TestView extends React.Component {
  render() {
    return (
        <View style={{flexDirection: 'row',width:'50%', marginTop: '5%'}}>
          <ScrollView style={{height:'25%', backgroundColor: 'black'}}>
          
          <Text style={{fontFamily: 'serif', fontSize: 25 ,fontWeight: 'bold', color: 'red'}}>
              Hi! --
              <Text  style={{color: 'red', fontSize: 35}}>
                I --
              </Text>
              <Text style={{color: 'blue'}}>
                am --
              </Text>
              <Text style={{color: 'green', fontSize: 45}}>
                Gastón --
              </Text>
          </Text>
            <View >   
              <Image style={{marginTop: '5%', marginBottom:'5%', width: '100%', height: 80}}
                source={require('../media/landscape4.jpg')} 
            />
            <View style={styles.container}>
              <Box color="red" />
              <Box color="blue" />
              <Box color="pink" />
              <View style={{width: '80%', height: 100, backgroundColor: 'red'}} />
              <View style={{width: '50%', height: 150, backgroundColor: 'blue'}} />
              <View style={{width: '100%', height: 100, backgroundColor: 'red'}} />
              <View style={{width: '50%', height: 150, backgroundColor: 'blue'}} /> 
            </View>
            
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