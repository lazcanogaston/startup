import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: '4%',
        flex: 1,
        backgroundColor: '#27A5BE',
        flexDirection:'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        
      },    
    littleBox:{
        margin: '4%',
        position: 'relative',
        backgroundColor: 'red',
        height: 100,
        width: 100,
    },
    mediumBox:{
        margin: '4%',
        position: 'relative',
        backgroundColor: '#7527BE',
        height: 150,
        width: 150,
    },
    bigBox:{
        margin: '4%',
        position: 'relative',
        backgroundColor: 'white',
        height: 200,
        width: 200,
    }

});

export default styles;