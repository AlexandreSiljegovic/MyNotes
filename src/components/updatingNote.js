import React from 'react';
import { View } from 'react-native';


function updateNote(data, note) {
  for (let i = 0; i < data.length; i++) {
    if(data[i].id === note.id) {
        data[i] = {
          ...data[i],  // Copy existing properties from data[i]
          ...note       // Overwrite with properties from note
        };
        return data; 
    }
  }
}


export default updateNote;