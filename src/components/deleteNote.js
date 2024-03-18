import React from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import {Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';



async function deleteNote(data, note) {
    if(note.id === undefined){
        Alert.alert('Error', 'ID is undefined. Cannot delete note. Please try again later.');
        [
         {
             text : 'Ok', 
             style: 'cancel'
         }
        ]

    }else { 
        try{
            let data = JSON.parse(await AsyncStorage.getItem('notes'));
            for(let i=0; i < data.length; i++){
                if(data[i].id === note.id){
                    data.splice(1, 1);
                }
            }
            if(note.notificationsId !== null){
                await Notifications.cancelScheduledNotificationAsync(note.notificationsId);
            }
            await AsyncStorage.setItem('notes', JSON.stringify(data));
            navigation.goBack(); 

        }catch(err){
            Alert.alert('Error', 'An error occurred while deleting the note. Please try again later.');
            [
             {
                 text : 'Ok', 
                 style: 'cancel'
             }
            ]

        }

    }
    }

export default deleteNote;