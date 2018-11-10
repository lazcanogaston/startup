import React from 'react';
import {TextInput, View, Text } from 'react-native';
import styles from '../styles/styles'

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.inputSection}>
                <Text >Text: </Text>
                <TextInput onChangeText={(text) => this.setState({text})} style={styles.input} placeholder=' Insert text here ' />
                <Text style={styles.inputValue}>
                    value: {this.state.text}
                </Text>
            </View> 
        );
    }
}
