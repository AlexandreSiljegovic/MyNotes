import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import Style from './style';


function renderNotes (item, navigation) {
  return (
   
      <TouchableOpacity style={Style.noteArea} onPress={()=> navigation.navigate("Notes", {note : item, search: true })}>
    <View> style={[{flexDirection: 'row', justifyContent: 'space-between'}]}
        <Text style={Style.txNoteTitle} numberOfLines={3}>
            {item.title}
   
        </Text>
        <Feather name="bell" size={15} color="green" />
        <Text style={Style.txNote} numberOfLines={6}>
            {item.note}

        </Text>
    </View>
       
          </TouchableOpacity>
       
    
  );
}

export default renderNotes;