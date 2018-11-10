import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: '4%',
        flex: 1,
        backgroundColor: 'green',
        flexDirection:'column', //change to 'column' to see how the blocks changes their positions and complete all the device height 
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        
      },    
    Box_1:{
        margin: '4%', 
        backgroundColor: 'red',
        height: '20%',
        width: '20%'
        
    },
    Box_2:{
        margin: '4%',
        backgroundColor: '#7527BE',
        height: '20%',
        width: '20%',
        alignSelf: 'center'
    },
    Box_3:{
        margin: '4%', 
        backgroundColor: 'white',
        height: '20%',
        width: '20%',
        alignSelf: 'flex-end'
        
    },
    bRadius:{
        borderRadius: 50
    }

});

export default styles;