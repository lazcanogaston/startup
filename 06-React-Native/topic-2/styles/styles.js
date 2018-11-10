import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: '4%',
        flex: 1,
        ...Platform.select({
            ios:{
                backgroundColor: 'grey'
            },
            android: {
                backgroundColor: 'white'
            }
        }),
        
        flexDirection:'column', //change to 'column' to see how the blocks changes their positions and complete all the device height 
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        
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
    },

    title:{
        fontFamily: 'serif', 
        fontSize: 25 ,
        fontWeight: 'bold', 
        color: 'black',
        alignSelf: 'center',
        top: 7
    },
    articleWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '5%',
        width: '100%'     
    },
    article:{
        width: '60%',
        fontFamily: 'serif', 
        fontSize: 12 ,
        fontWeight: 'bold', 
        color: 'black',
        marginLeft: '3%'
    },
    imgSection:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    img:{
        height: 100,
        width: 100
    },
    articlePhoto:{
        width:'30%',
         height: '30%'
    }

});

export default styles;