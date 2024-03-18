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
import ModalNotification from "../../components/Notification";
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";


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
    justifyContent : 'center' // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.8,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState({
    id : null,
    title: "",
    note: "",
    date: date,
    notificationId: null,
  });
  const [modalVisible, setModalVisible] = useState(false);
  
  useEffect(() => {
    if (route.params.note) {
      setNote(route.params.note);
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingRight: 20,
            }}
          >
            {/* <TouchableOpacity onPress={() => Save(note, navigation)}>
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity> */}
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Feather name="bell" size={24} color="white" />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => Delete(note, navigation)}>
                <Feather name="trash-2" size={24} color="black" />
              </TouchableOpacity> */}
          </View>
        );
      },
    });
  }, [navigation, note]);

  const [importance, setImportance] = useState("");
  
  const handleImportanceChange = (value) => {
    setImportance(value);
  };

  return (
    <SafeAreaView style={Style.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accesible={false}>
        <TextInput
          style={Style.txtTitleNote}
          autoFocus={true}
          maxLength={40}
          value={note.title}
          placeholder={"Title"}
          onChangeText={(text) => setNote({ ...note, title: text })}
        ></TextInput>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accesible={false}>
        <TextInput
          style={Style.txtInput}
          multiline={true}
          value={note.note}
          placeholder={"Description"}
          onChangeText={(text) => setNote({ ...note, note: text })}
        ></TextInput>
      </TouchableWithoutFeedback>
     <RNPickerSelect
  style={pickerSelectStyles}
 
  placeholder={{ label: "Select Importance", value: null }}
  Icon={() => {
    return <ion-icon ios="heart-outline" md="heart-sharp"></ion-icon>;
  }}
  onValueChange={handleImportanceChange}
  items={[
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
  ]}
/>

      
      <ModalNotification
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        date={date}
        setDate={setDate}
        note={note}
        setNote={setNote}
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
              backgroundColor: "#017CE9",
              flex: 1,
            },
          ]}
          onPress={() => Save(note, navigation)}
        >
          <Feather name="save" size={29} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Style.actionButton,
            {
              backgroundColor: "#DF4843",
              flex: 1,
            },
          ]}
          onPress={() => Delete(note, navigation)}
        >
          <Feather name="trash-2" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
