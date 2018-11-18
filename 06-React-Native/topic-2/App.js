import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles/styles.js';


export default class App extends React.Component {
  
  render() {
    var pic = require ('./media/facebook.png');
    return (
      <View style={styles.container}>
      
        <Text style={styles.title}>TITLE</Text>
        <View style={styles.articleWrapper}>   
          <Text style={styles.article}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, quasi veniam. Placeat quasi facilis provident rerum, beatae deserunt. Molestias ex molestiae cumque hic! Suscipit deserunt odit nulla, tenetur cupiditate reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ad eum! Animi nobis consequatur nesciunt inventore porro suscipit sint totam eaque aliquid facere rerum, iste optio odit, ratione, nostrum autem?</Text>
          <Image source= {require('./media/landscape4.jpg')} style={styles.articlePhoto}/>
        </View>
        
         <View style={styles.imgSection}>
          <Image source={pic} style={styles.img}/>  
          <Image source={pic} style={styles.img}/>
          <Image source={pic} style={styles.img}/>
          <Image source={pic} style={styles.img}/> 
        </View> 
      </View>
    );
  }
}


