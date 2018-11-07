import React from 'react';
import { StyleSheet, View } from 'react-native';
export default class Box extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        
        const styles = StyleSheet.create({
            box: {
              
              backgroundColor: this.props.color,
              height: 100,
              width: '50%'
            },
          });

      return (
        <View style={styles.box}/>
      
      );
    }
  }