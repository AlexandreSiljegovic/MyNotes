import React, { useState } from "react";
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  useColorScheme,
  Dimensions,
} from "react-native";
import { useFocusEffect, } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchBar from "../../components/SearchBar";
import Style from "./style";
import Colors from "../../styles/colors";
import Notes from "../../components/RenderNotes";
import {Feather} from "@expo/vector-icons";
import { BulbFilled, BulbOutlined } from "@ant-design/icons";
import { Montserrat_400Regular_Italic, useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'

export default function Home({ navigation }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const deviceColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(deviceColorScheme === "dark");
  const screenHeight = Dimensions.get('window').height;


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

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const containerStyle = {
    ...[Style.safeArea, Style.header],
    backgroundColor: isDarkMode ? "#000" : "#fff",
  };

  const textStyle = {
    color: isDarkMode ? "#fff" : "#000",
  };

  if (loading) {
    return (
      
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} color={Colors.loading} />
      </View>
    );
  } else {
    return (
     
      
      <SafeAreaView style={[Style.safeArea, containerStyle, {fontFamily : 'Montserrat_400Regular_Italic'}]}>
        <View style={Style.header}>
          <View style={{flexDirection : 'row', justifyContent :'flex-end', marginRight : 30, marginTop : 20}}>
           <TouchableOpacity onPress={toggleDarkMode}>
            {isDarkMode ? (
              <Feather name="sun" style={{ fontSize: 30, color: "white", marginTop: screenHeight * 0.03 }} />
            ) : (
              <Feather name="moon" style={{ fontSize: 30, color: "black", marginTop: screenHeight * 0.03  }}  />
            )}
          </TouchableOpacity>
          </View>
          <Text style={ [Style.txTitle, textStyle, {fontFamily : 'Montserrat_400Regular_Italic'} ]}>MyNotes</Text>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={Style.searchArea}>
            <SearchBar data={data} onChange={setData} />
          </View>
          </TouchableWithoutFeedback>
        </View>
        <FlatList style={{width : '90%', alignSelf : 'center'} }
          ListEmptyComponent={
            <Text style={{ textAlign: "center", ...textStyle, color: isDarkMode ? "#fff" : "#000" }}>
              No Notes yet !
            </Text>
          }
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <Notes item={item} navigation={navigation}   />;
          }}
        />
        <TouchableOpacity
          style={Style.addNoteButton}
          onPress={() => navigation.navigate("Notes", { search: false })}
        >
          <AntDesign name="pluscircle" size={60} style={textStyle} />
        </TouchableOpacity>
      </SafeAreaView>
      
    );
  }
}
