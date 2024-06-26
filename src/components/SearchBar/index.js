import React, { useState } from "react";
import { View, TextInput} from "react-native";
import Style from "./style";

export default function SearchBar({ data, onChange }) {
  // Fonction pour rechercher une note
  const [masterData, setMasterData] = useState(data);
  const search = (text) => {
    if (text) {
      const newData = data.filter((item) => {
        const itemTitle = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const titleSearch = text.toUpperCase();
        return itemTitle.indexOf(titleSearch) > -1;
      });
      onChange(newData);
    } else {
      onChange(masterData);
    }
  };

  return (
  
    <View>
      
      <TextInput 
        
        placeholder="Search Notes..."
        maxLength={50}
        onChangeText={(text) => search(text)}
        style={Style.searchArea}
      />
     
    </View> 
    
  );
}
