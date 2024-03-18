import { StyleSheet } from "react-native";  
import Colors from "../../styles/colors";


const Style = StyleSheet.create({
    container : {
        flex: 1, 
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: Colors.noteBackground,
        margin: 20, 
    },

    txtInput : {
        fontSize: 12,
        padding: 15,
        width: '100%',
        borderWidth: 0.6,
        borderRadius: 15,
        marginBottom: 20,
        height : '15%'
        

    },
    txtTitleNote : {
        width: '100%',
        padding: 15,
        borderWidth: 0.5,
        borderRadius: 10,
        marginBottom: 20,
        fontSize: 20,
        color : "#808080"
    }, 
    actionButton : {
        borderRadius: 10,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    select : {
        width: '100%',
        padding: 15,
        borderWidth: 0.6,
        borderRadius: 15,
        marginBottom: 20,
        height : '15%'
        


    }
});

export default Style;
