import React, { useState, useEffect} from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Style from "./style";
import Save from "../../components/FunctionsNotes/saveNote";
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet } from "react-native";
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'
export default function Notes({ route, navigation }) {
  
  // Fonction pour attribuer une couleur à l'importance de la note
  const importanceColor = (importance) => {
    switch (importance) {
      case 'reminder':
        return '#7EE4EC'; 
      case 'normal':
        return '#FFD4CA'; 
      case 'important':
        return '#F45B69'; 
      default:
        return 'black'; 
    }
  };
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
        backgroundColor : '#fff',
        color : importanceColor(importance),
       
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
        color : importanceColor(importance),
  },
});
// État pour la date de la note
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


 
  // mise à jour d'état pour la note
  useEffect(() => {
    if (route.params.note) {
      setNote(route.params.note);
    }
  }, []);


  // gérer l'importance de la note 
const handleImportantChange = (importance) => {
    setNote(prevNote => ({
      ...prevNote,
      importance: importance 
    }));
  };

  return (<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <SafeAreaView style={Style.container}>
      
      
        <TextInput
          style={[Style.txtTitleNote,  {fontFamily : 'Montserrat_400Regular'}]}
          autoFocus={false}
          maxLength={40}
          value={note.title}
          placeholder={"Title"}
          onChangeText={(text) => setNote({ ...note, title: text })}
        ></TextInput>
      
    
        <TextInput
          style={[Style.txtInput, {fontFamily : 'Montserrat_400Regular'}]}
          multiline={true}
          value={note.note}
          placeholder={"Description"}
          onChangeText={(text) => setNote({ ...note, note: text })}
          
        ></TextInput>

      {/* select afin de selectionner l'importance de la note et attribuer la couleur correspondante */}
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
    { label: "Reminder", value: "reminder", color: '#000', fontFamily : 'Montserrat_400Regular',},
    { label: "Normal", value: "normal", color : '#000' },
    { label: "Important", value: "important", color : '#000'},
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
          <MaterialCommunityIcons name="note-plus-outline" size={43} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
    
  );
}
