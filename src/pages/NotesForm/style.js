import { StyleSheet } from "react-native";  
import Colors from "../../styles/colors";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";


const Style = StyleSheet.create({
    container : {
        flex: 1, 
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: Colors.noteBackground,
        margin: 20, 
    },

    txtInput : {
        fontSize: 17,
        padding: 15,
        width: '100%',
        borderWidth: 0.6,
        borderRadius: 15,
        marginBottom: 20,
        height : '15%',
         shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 2,
        },
        shadowOpacity : 0.25,
        shadowRadius : 3.84,
        elevation : 5,
        backgroundColor : '#fff',
        

    },
    txtTitleNote : {
        width: '100%',
        padding: 15,
        borderWidth: 0.5,
        borderRadius: 10,
        marginBottom: 20,
        fontSize: 20,
        color : "#808080",
         shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 2,
        },
        shadowOpacity : 0.25,
        shadowRadius : 3.84,
        elevation : 5,
        backgroundColor : '#fff',
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
