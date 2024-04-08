import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from './node_modules/@react-navigation/native';
import 'react-native-gesture-handler';
import Route from './src/routes/route';
import { useFonts, Montserrat_400Regular, Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat'
import { Platform } from 'react-native';
export default function App() {
 

// let MaskedView;
// if (Platform.OS === 'android') {
//   // On Android, MaskedView might not be available
//   MaskedView = View; // or any other alternative
// } else {
//   MaskedView = require('@react-native-community/masked-view').default;
// }

// Then use MaskedView in your components

   let [fontsLoaded] = useFonts({
    'Montserrat_400Regular_Italic': require("@expo-google-fonts/montserrat/Montserrat_400Regular_Italic.ttf"),
    'Montserrat_400Regular': require("@expo-google-fonts/montserrat/Montserrat_400Regular.ttf"),

  });
  
  if (!fontsLoaded) {
    return null;
  }
  return (
  <NavigationContainer>
    <Route />
    <StatusBar style="auto" />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
