import React, { useState } from "react";
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  Button,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchBar from "../../components/SearchBar";
import Style from "./style";
import Colors from "../../styles/colors";
import Notes from "../../components/RenderNotes";


export default function Home({ navigation, }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
   

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true);
      const getData = async () => {
        try {
          let notes = await AsyncStorage.getItem("notes");
          if (notes === null) {
            notes = [];
          } else {
            notes = JSON.parse(notes);
          }
          setData(notes);
          setLoading(false);
        } catch (err) {
          console.log(err);
          alert("Error loading notes");
        }
      };
      getData();
    }, [])
  );
  

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} color={Colors.loading} />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={Style.safeArea} >
        <Text style={Style.txTitle}>MyNotes</Text>
        <View style={Style.searchArea}>
          <SearchBar data={data} onChange={setData} />
        </View>
        <FlatList
          ListEmptyComponent={
            <Text style={{ textAlign: "center" }}>No Notes yet ! </Text>
          }
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, }) => {
           
            return <Notes item={item} navigation={navigation} />;
          }}
        />
        <TouchableOpacity
          style={Style.addNoteButton}
          onPress={() => navigation.navigate("Notes", { search: false })}
        >
          <AntDesign name="pluscircle" size={60} color={Colors.addButton} />
        </TouchableOpacity>
       
      </SafeAreaView>
    );
  }
}
