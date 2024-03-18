import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import Style from './style';
function searchBar() {

  const [masterData, setMasterData] = useState("");
  const search = (text) => {
//     if(text) {
//                         const newData = data.filter((item) => {
//                                 const itemTitle = item.title ? item.title.toUpperCase() : "".toUpperCase();
//                                 const titleSearch = text.toUpperCase();
//                                 return itemTitle.indexOf(titleSearch) > -1;
//                         });
//                         onchange(newData);
//                 } else {
//                         onchange(masterData);
//                 }
            }
        
            
        return(
          <View style={Style.containerSearch}>
                 <View style={[Style.searchArea]}>
                         <TextInput placeholder="search Tasks.." maxLength={50} onChangeText={(text) => search(text)} />
                </View>
                </View>
                )
}

export default searchBar;