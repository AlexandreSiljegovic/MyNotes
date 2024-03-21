import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Style from "./style";
import Save from "../../components/saveNote";
import Delete from "../../components/deleteNote";
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet } from "react-native";
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'
export default function Notes({ route, navigation }) {
   
  const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    alignItems : 'center',
    justifyContent : 'center',
    shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 2,
        },
        shadowOpacity : 0.25,
        shadowRadius : 3.84,
        elevation : 5,
        backgroundColor : '#fff', 
        borderRadius : 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    alignItems : 'center',
    justifyContent : 'center',
    shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 2,
        },
        shadowOpacity : 0.25,
        shadowRadius : 3.84,
        elevation : 5,
        backgroundColor : '#fff', 
        borderRadius : 10,
  },
});
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState({
    id : null,
    title: "",
    note: "",
    date: date,
    notificationId: null,
    importance: "",
  });

const [importance, setImportance] = useState(note.importance);


 
  
  useEffect(() => {
    if (route.params.note) {
      setNote(route.params.note);
    }
  }, []);



  const [important, setImportant] = useState("");
  
const handleImportantChange = (importance) => {
    setNote(prevNote => ({
      ...prevNote,
      importance: importance 
    }));
  };

  return (
    <SafeAreaView style={Style.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accesible={false}>
        <TextInput
          style={[Style.txtTitleNote,  {fontFamily : 'Montserrat_400Regular'}]}
          autoFocus={false}
          maxLength={40}
          value={note.title}
          placeholder={"Title"}
          onChangeText={(text) => setNote({ ...note, title: text })}
        ></TextInput>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accesible={false}>
        <TextInput
          style={[Style.txtInput, {fontFamily : 'Montserrat_400Regular'}]}
          multiline={true}
          value={note.note}
          placeholder={"Description"}
          onChangeText={(text) => setNote({ ...note, note: text })}
          
        ></TextInput>
      </TouchableWithoutFeedback>
   <RNPickerSelect
  style={pickerSelectStyles}
  value={importance} // Définissez la valeur initiale du select avec la valeur de l'importance
  placeholder={{ label: "Select Importance", value: null }}
  Icon={() => {
    return <Feather name="chevron-down" size={46} color="black" />;
  }}
  onValueChange={(value) => {
    setImportance(value);
    handleImportantChange(value);
  }}
  items={[
    { label: "Reminder", value: "reminder" },
    { label: "Normal", value: "normal" },
    { label: "Important", value: "important" },
  ]}
/>


      
     
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
          position: "absolute",
          bottom: 0,
        }}
      >
        
        {/* <TouchableOpacity
          style={[
            Style.actionButton,
            {
              backgroundColor: "#F45B69",
              flex: 1,
            },
          ]}
          onPress={() => Delete(note, navigation)}
        >
          <Feather name="trash-2" size={24} color="white" />
        </TouchableOpacity> */}
        <TouchableOpacity
          style={[
            Style.actionButton,
            {
              backgroundColor: "#456990",
              flex: 1,
            },
            
          ]}
          onPress={() => Save(note, navigation)}
        >
          <Feather name="save" size={29} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
