import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import updateNote from "./updatingNote";
import {Alert} from 'react-native';


async function SaveNote (note, navigation) {
   async function getKey(){
    const note = await AsyncStorage.getItem('0');
    if(note === null){
          await AsyncStorage.setItem('0', '1');
          return 1;
    }else{
        const key = String(Number(note) + 1 )
        await AsyncStorage.setItem('0', key);
        return key;
    }
   }

   if(note.note === '' || note.title === ''){
       Alert.alert('Error', 'Title and Note cannot be empty');
       [
        {
            text : 'Ok', 
            style: 'cancel'
        }
       ]

   } else{
    try{ 
        let data = [];
        if(note.id){
            if(Array.isArray(JSON.parse(await AsyncStorage.getItem('notes')))){
                data = JSON.parse(await AsyncStorage.getItem('notes'));
            } else {
            data.push(JSON.parse(await AsyncStorage.getItem('notes')));
        } 
        data = updateNote(data, note);
        await AsyncStorage.setItem('notes', JSON.stringify(data));
        } else {
            note.id = await getKey();
           if(await AsyncStorage.getItem('notes') === null){
               await AsyncStorage.setItem('notes', JSON.stringify([note]));

           } else {
              data.push(JSON.parse(await AsyncStorage.getItem('notes')));
           } 
           data.push(note);
           await AsyncStorage.setItem('notes', JSON.stringify(data));
        }

    }catch(error){
        console.log(error);
         Alert.alert('Error', 'An error occurred while saving the note. Please try again later.');
       [
        {
            text : 'Ok', 
            style: 'cancel'
        }
       ]


    }

   }
}

export default SaveNote;