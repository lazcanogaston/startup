import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        top: '6%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'flex-start',
        flexDirection: 'column'
    },
    title:{
        alignSelf: 'center',
        marginBottom: '3%'
    },
    inputSection:{
       flexDirection: 'row',
       margin: 3

    },
    input:{
        borderStyle: 'solid',
        borderWidth: 'black',
        borderWidth: 1,
        width: '30%'
    },
    inputValue:{
        marginLeft: '3%'
    }
});

export default styles;