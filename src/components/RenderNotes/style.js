import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../styles/colors';

const width = (Dimensions.get('window').width - 60) / 1
const height = (Dimensions.get('window').height - 400) / 2 
const styles = StyleSheet.create({
    noteArea : {
        backgroundColor: Colors.notes,
        width: '100%',
        height: "auto",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        marginTop: 10,
        marginBottom: 10,
        shadowOpacity: 0.25,
        shadowRadius: 2.62,
        elevation: 4,
    },
    txNoteTitle : {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#000",
    },
    txNote : {
        
        color: "#000",
        
    }, 

    searchArea : {
        
    }
 });

export default styles;