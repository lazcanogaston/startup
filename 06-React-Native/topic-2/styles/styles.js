import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: '4%',
        flex: 1,
        backgroundColor: '#27A5BE',
        flexDirection:'column', //change to 'column' to see how the blocks changes their positions and complete all the device height 
       // alignItems: 'flex-start',
        justifyContent: 'space-around',
        
      },    
    littleBox:{
        margin: '4%', 
        backgroundColor: 'red',
        height: '20%',
        width: '30%'
    },
    mediumBox:{
        margin: '4%',
        backgroundColor: '#7527BE',
        height: '30%',
        width: '30%'
    },
    bigBox:{
        margin: '4%', 
        backgroundColor: 'white',
        height: '50%',
        width: '30%'
        
    },
    bRadius:{
        borderRadius: 50
    }

});

export default styles;