import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        paddingHorizontal : 20,
        paddingTop : 20,
        margintop : 20,
    },
    addNoteButton : {
        zIndex : 9,
        position : 'absolute',
        bottom : 20,
        right : 20,
        backgroundColor : '#fff',
        borderRadius : 100,
        shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 2,
        },
        shadowOpacity : 0.25,
        shadowRadius : 3.84,
        elevation : 5,
    },
    noteList : {
        margin : 5,
    }, 

    txTitle : {
        fontSize : 20,
        fontWeight : 'bold',
        textAlign : 'center',
        margin : 20, 
        
    },
    search: {
        backgroundColor : '#fff',
        padding : 10,
        height : '20%',
        borderRadius : 10,
        marginBottom : 20,
        shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 2,
        },
        shadowOpacity : 0.25,
        shadowRadius : 3.84,
        elevation : 5,
    },
 });

 export default styles;