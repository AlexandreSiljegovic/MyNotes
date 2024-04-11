
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import updateNote from './updatingNote';

export default async function SaveNote(note, navigation){
    // Vérifier si les champs sont vides
    if(note.note === '' || note.title === '' || !note.importance  ){
        Alert.alert(
            'ERROR',
            'Title, Description and Importance are required.',
            [
                {
                    text:'OK',
                    style:'cancel'
                }
            ]
        )
    }else{
        try{
            // Récupérer les notes
            let data = [];
            if(await AsyncStorage.getItem('notes') !== null){
                data = JSON.parse(await AsyncStorage.getItem('notes'));
            }

            if(note.id){
                data = updateNote(data,note);
            }else{
                
                note.id = data.length > 0 ? Math.max(...data.map(note => note.id)) + 1 : 1;
                data.push(note);
            }

            // Enregistrer les notes
            await AsyncStorage.setItem('notes',JSON.stringify(data));
            navigation.goBack();
        }catch(err){
            console.log(err);
            Alert.alert(
                'ERROR',
                'There was an error while trying to save the note. Try again later',
                [
                    {
                        text:'OK',
                        style:'cancel'
                    }
                ]
            )
        }
    }
}