import react, {useState} from 'react';
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

    return (    
        <SafeAreaView
        style={[Style.container]}>
            {/* Heading */}
            <Text style={Style.txTitle}>
                MyNotes
            </Text>
            {/* SEARCH BAR */}
            <SearchBar data={data} onChange={setData}/>
            {/* NOTES */}
            <FlatList 
            ListEmptyComponent={<Text style={{textAlign: 'center'}} > No notes yet! </Text>}
            data={data} 
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => {
                return <Notes item={item} navigation={navigation} />

                
            }}/>
            {/* ADD TODO BUTTON */}
            <TouchableOpacity style={Style.addNoteButton}>
                <AntDesign name="pluscircle" size={60} color={Colors.addButton} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home;  