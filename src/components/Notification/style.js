import { StyleSheet } from "react-native-web";  

const styles = StyleSheet.create({
    modalView: {
        marginRight: 20,
        marginLeft: 20,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 35,
        height: "50%", 
        alignItems : 'center', 
        justifyContent : 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
    },
    modalButton : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        width : '100%',

    },
    button : {
        alignItems : 'center',
        borderRadius : 20,
        padding : 10,
        width : 100,
        shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 2,
        },
        shadowOpacity : 0.25,
        shadowRadius : 4,
        elevation : 5,
    },

    buttonSave : {
        backgroundColor : '#2196F3',
    },

    buttonCancel : {
        backgroundColor : '#c70000',
    },

    txtStyle : {
        fontWeight : 'bold',
        color : '#fff',
    }, 

    buttonHours : {
       borderBottomColor : '#000',
        borderBottomWidth : 1,
        alignItems : 'center',
        alignSelf : 'center',
        width : 150,
        marginBottom : 10,
    },

    txtHours : {
        fontSize : 25,
        fontWeight : 'bold',
        color : '#000',
    },



    }
    

);

export default styles;