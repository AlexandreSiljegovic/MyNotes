import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Text
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Style from "./style";
import Save from "../../components/FunctionsNotes/saveNote";
import Delete from "../../components/FunctionsNotes/deleteNote";
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet } from "react-native";
import { useFonts, Montserrat_400Regular, Montserrat_400Regular_Itali, Montserrat_700Bold_Italic, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function NotesEdit({ route, navigation }) {
  

   // Styles pour le sélecteur de valeurs
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
    // État pour la date de la note
  const [date, setDate] = useState(new Date());
  // État pour la note
  const [note, setNote] = useState({
    id : null,
    title: "",
    note: "",
    date: date,
    notificationId: null,
    importance: "",
  });
  const hasUnsavedChanges = Boolean(note.title || note.note || note.importance);

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (!hasUnsavedChanges) {
          // If we don't have unsaved changes, then we don't need to do anything
          return;
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          'Discard changes?',
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
          [
            { text: "Don't leave", style: 'cancel', onPress: () => {} },
            {
              text: 'Discard',
              style: 'destructive',
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => navigation.dispatch(e.data.action),
            },
          ]
        );
      }),
    [navigation, hasUnsavedChanges]
  );




 
  
  // État pour l'importance de la note
  const [importance, setImportance] = useState(note.importance);

  // initialiser la note lors de l'édition
  useEffect(() => {
    if (route.params.note) {
      setNote(route.params.note);
      setImportance(route.params.note.importance || ''); // Initialisation de l'importance avec la valeur de la note en cours d'édition
    }
    console.log(route.params.note); 
  }, []);

  // Fonction pour gérer le changement de l'importance de la note
  const handleImportantChange = (importance) => {
    setImportance(importance);
    setNote(prevNote => ({
      ...prevNote,
      importance: importance 
    }));
  };
  const handleDeleteNote = () => {
  Alert.alert(
    'Confirmation',
    'Are you sure you want to delete this note?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          Delete(note, navigation);
        },
        style: 'destructive',
      },
    ],
    { cancelable: true }
  );
};


  return (
    <SafeAreaView style={Style.container}>
      {/* Zone de saisie pour le titre de la note */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
          style={[Style.txtTitleNote,  {fontFamily : 'Montserrat_400Regular'}]}
          autoFocus={false}
          maxLength={40}
          value={note.title}
          placeholder={"Title"}
          onChangeText={(text) => setNote({ ...note, title: text })}
        />
      </TouchableWithoutFeedback>

      {/* Zone de saisie pour la description de la note */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
          style={[Style.txtInput, {fontFamily : 'Montserrat_400Regular'}]}
          multiline={true}
          value={note.note}
          placeholder={"Description"}
          onChangeText={(text) => setNote({ ...note, note: text })}
        />
      </TouchableWithoutFeedback>

      {/* Sélecteur de valeurs pour l'importance de la note */}
      <RNPickerSelect
        style={pickerSelectStyles}
        value={importance}
        placeholder={{ label: "Select Importance", value: null }}
        Icon={() => {
          return <Feather name="chevron-down" size={46} color="black" />;
        }}
        onValueChange={handleImportantChange}
        items={[
          { label: "Reminder", value: "reminder" },
          { label: "Normal", value: "normal" },
          { label: "Important", value: "important" },
        ]}
      />

      {/* Boutons pour supprimer et enregistrer la note */}
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
        {/* Bouton pour supprimer la note */}
        <TouchableOpacity
          style={[
            Style.actionButton,
            {
              backgroundColor: "#F45B69",
              flex: 1,
            },
          ]}
           onPress={handleDeleteNote}
        >
          {/* <Feather name="trash-2" size={24} color="white" /> */}
          
          <MaterialCommunityIcons name="note-remove-outline" size={43} color="#fff" />
          
        </TouchableOpacity>

        {/* Bouton pour enregistrer la note */}
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
          {/* <Feather name="save" size={29} color="white" /> */}
           <MaterialCommunityIcons name="note-edit-outline" size={43} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

