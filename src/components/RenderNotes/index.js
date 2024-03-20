import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import Style from "./style";
import Notes from "../../pages/Notes";
import { Montserrat_400Regular, useFonts, Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat'

export default function renderNote({ item, navigation }) {

 const formatDate = (dateString) => {
    let [fontsLoaded] = useFonts({
    'Montserrat_400Regular_Italic': require("@expo-google-fonts/montserrat/Montserrat_400Regular_Italic.ttf"),
    'Montserrat_400Regular': require("@expo-google-fonts/montserrat/Montserrat_400Regular.ttf"),

  });
  
  if (!fontsLoaded) {
    return null;
  }
    const date = new Date(dateString);
    //  formatage de date
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    
    return date.toLocaleDateString("en-US", options);
  };

    const getBackgroundColor = () => {
    switch (item.importance) {
      case "reminder":
        return "#7EE4EC"; 
      case "normal":
        return "#FFD4CA"; 
      case "important":
        return "#F45B69"; 
       
    }
  };
  const noteStyle = {
    backgroundColor: getBackgroundColor(),
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  };
  return (
    <TouchableOpacity  
      style={[Style.noteArea, noteStyle]}
      onPress={() => navigation.navigate("Notes", { note: item, search: true })}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        
        <Text style={[Style.txNoteTitle, {fontFamily : 'Montserrat_400Regular_Italic'}]} numberOfLines={3}>
          {item.title}
        </Text>
        <Text style={[Style.importance, {fontFamily : 'Montserrat_400Regular_Italic'}]}>
        {item.importance}
      </Text>
        <Text style={[Style.txDate, {fontFamily : 'Montserrat_400Regular_Italic'}]}>{formatDate(item.date)}</Text>
       
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={[Style.txNote, {fontFamily : 'Montserrat_400Regular' }]} numberOfLines={1} ellipsizeMode="tail">
        {item.note}
      </Text>
      </View>
    </TouchableOpacity>
  );
}
