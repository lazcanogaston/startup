import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './components/Input';
import styles from './styles/styles'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My app</Text>
        <Input/>
      </View>
    );
  }
}


