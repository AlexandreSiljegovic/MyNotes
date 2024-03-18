import Colors from '../../styles/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    searchArea : {
        backgroundColor: Colors.searchBar,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor : '#fff',
        padding : 10,
        width : '90%',
        justifyContent : 'center',
        alignItems : 'center',
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

    containerSearch : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        width : '100%',
        height: '15%',
    },
});

export default styles;