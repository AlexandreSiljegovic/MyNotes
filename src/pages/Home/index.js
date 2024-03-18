import React, {useState} from 'react';
import {View, TextInput, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator, Text, Pressable} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchBar from '../../components/SearchBar';
import Style from './style';
import Colors from '../../styles/colors';
import Notes from "../../components/RenderNotes"


function Home({navigation}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useFocusEffect(
        React.useCallback(() => { 
            const getData = async () => {
                try{
                let notes = await AsyncStorage.getItem('notes');
                if(notes === undefined || notes === null){
                    notes = '[]';
                }
                if(notes.length > 0 && notes[0] !== '[]'){
                    notes = `${notes}` ;
                }
                setData(JSON.parse(notes));
                }catch(err){
                    console.log(err);
                    alert('Error loading notes');
                }
            }
            getData();
        }, []));

    return (    
        <SafeAreaView
        style={[Style.container]}>
            {/* Heading */}
            <Text style={Style.txTitle}>
                MyNotes
            </Text>
            {/* SEARCH BAR */}
            <SearchBar data={data} onChange={setData} style={Style.search}  />
            {/* NOTES */}
            <FlatList 
            ListEmptyComponent={<Text style={{textAlign: 'center'}} > No notes yet! </Text>}
            data={data} 
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => {
                return <Notes item={item} navigation={navigation} />

                
            }}/>
            {/* ADD TODO BUTTON */}
            <TouchableOpacity style={Style.addNoteButton} onPress={()=> navigation.navigate("Notes", {search : false})}>
                <AntDesign name="pluscircle" size={60} color={Colors.addButton} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home;  