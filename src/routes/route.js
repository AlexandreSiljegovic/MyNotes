import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Notes from '../pages/NotesForm';
import Colors from '../styles/colors';
import Edit from '../pages/NoteEditForm';



const Stack = createStackNavigator();
function Routes() {
    
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Notes" component={Notes} options={{title: 'ADD NOTE', headerTintColor : 'white', headerStyle: {backgroundColor: Colors.header, elevation: 0}, fontFamily : {fontFamily :'Montserrat_400Regular_Italic'}}} />
            <Stack.Screen name="NotesEdit" component={Edit} options={{title: 'EDIT NOTE', headerTintColor : 'white', headerStyle: {backgroundColor: Colors.header, elevation: 0}, fontFamily : {fontFamily :'Montserrat_400Regular_Italic'}}} />
        </Stack.Navigator>
    )
}

export default Routes;