import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Other from './Other';

export default createBottomTabNavigator({
  Forms:  createStackNavigator({
    form1: Form1,
    form2: Form2,
    form3: Form3   
  }),
  Others: Other ,
},

{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Forms') {
        iconName = 'ios-information-circle';
      } else if (routeName === 'Others') {
        iconName = 'ios-options';
      }

      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'lightblue',  //button colors
    inactiveTintColor: 'grey',
  },
}
);

