
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';




async function deleteNote(note, navigation) {
    // Vérifier si l'ID de la note est défini
    if(note.id === undefined){
        Alert.alert('Error', 'ID is undefined. Cannot delete note. Please try again later.');
         
        [
         {
             text : 'Ok', 
             style: 'cancel'
         }
        ]
       

    }else { 
        // Supprimer la note
        try {
           let data = JSON.parse(await AsyncStorage.getItem('notes'))
            for(let i = 0; i < data.length; i++) {
                if(data[i].id === note.id) {
                    data.splice(i,1);
                }
            }
            // Enregistrer les données
            await AsyncStorage.setItem('notes', JSON.stringify(data));
            navigation.goBack();
        } catch (err) {
            Alert.alert('Error', 'An error occurred while deleting the note. Please try again later.');
            [
                {
                    text: 'Ok',
                    style: 'cancel',
                },
            ];
        }

        }

    }
    

export default deleteNote;