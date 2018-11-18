import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
export default class Box extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        
        const styles = StyleSheet.create({
            box: {
              
              backgroundColor: this.props.color,
              height: 100,
              width: '50%',
              justifyContent: 'center',
              padding: '3%',
              
            },
          });

      return (
        <View style={styles.box}>
            <Text  style={{fontSize: 15, color: 'white',fontWeight:'bold'}}>Box component</Text>    
        </View>
      );
    }
  }