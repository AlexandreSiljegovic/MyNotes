import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import {useState, useEffect, useLayoutEffect} from 'react';
import {Feather} from '@expo/vector-icons';
import Style from './style';
import Save from '../../components/saveNote';
import Delete from '../../components/deleteNote';
import { Notifications } from 'expo';
import ModalNotification from '../../components/Notification';


function Notes({route, navigation}) {
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState({
    id : null,
    title: '',
    note: '',
    date: date,
    notificationsId: null
  });
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if(route.params.note){
      setNote(route.params.note);
    }
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
           <TouchableOpacity style={Style.headerButton} onPress={() => setModalVisible(!modalVisible)}>
          <Feather name="bell" size={24} color="white" style={{padding : 10}} />
        </TouchableOpacity>
        
       
      )}
        
    });

  } , [navigation, note]);
  return (
   <SafeAreaView style={Style.container}> 
   <TextInput style={Style.txtTitleNote}
   autoFocus={true}
   maxLength={40}
   value={note.title}
   placeholder={"Title"}
   onChangeText={(text) => setNote({...note, title:text})}>

   </TextInput>
   <TextInput style={[Style.txtInput]}
  
  multiline={true}
   value={note.description}
   placeholder={"Description"}
   onChangeText={(text) => setNote({...note, note: text})}>

   </TextInput>
    <ModalNotification modalVisible={modalVisible} setModalVisible={setModalVisible} date={date} 
    setDate={setDate} note={note} setNote={setNote}/>

    <View
    style={{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
      position: 'absolute',
      bottom: 0,
      
    }}> 
    <TouchableOpacity style={[Style.actionButton, {backgroundColor: '#017CE9', flex : 1}]} onPress={() => Save(note, navigation)}>
      <Feather name='save' size={29} color='white'/></TouchableOpacity> 
      <TouchableOpacity style={[Style.actionButton, {backgroundColor: '#DF4843', flex : 1}]} onPress={() => Delete(note, navigation)}>
      <Feather name='trash-2' size={29} color='white'/></TouchableOpacity> 


    </View>
   </SafeAreaView>

  )
}; 
    
export default Notes;