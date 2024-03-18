import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, Platform, View, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import * as Notifications from 'expo-notifications';
import Style from './style';
import DateTimePicker from '@react-native-community/datetimepicker';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

const ModalNotification = ({
    modalVisible,
    setModalVisible,
    date,
    setDate,
    note,
    setNote
}) => {
    const [showPicker, setShowPicker] = useState({
        showDate : false, 
        showHours: false, 
    });
    async function schedulePushNotification() {
        const id = await Notifications.scheduleNotificationAsync({
            content :  {
                title: `Notification' : ${note.title.substr(0,40)}`, 
                body : note.note.substr(0,40), 
            }, 
            trigger: {
                date: new Date(date), 
            },
        });
        setNote({
            ...note, 
            notificationId: id,
        });

    }
    const onChange = (event, selectedDate) => {
           setShowPicker({showDate: false, showHours: false});
           const currentDate = selectedDate || date;
           setDate(currentDate);
    }
    const manual = new Date();

    const currentFormattedData = (type) => {
        const day = manual.getDate().toString().padStart(2, '0');
        const month = (manual.getMonth() + 1).toString().padStart(2, '0');
        const year = manual.getFullYear();
        const hours = manual.getHours();
        const minutes = manual.getMinutes();

        if(type === 'date'){
            return `${day}/${month}/${year}`;

        }else {
            return `${hours}:${minutes}`;

        }


    }

    return (
       <Modal
       animationType='fade'
       transparent={true}
       visible={modalVisible}
       onRequestClose={() => {
        setModalVisible(!modalVisible);
       }}> 
            <View
            style={Style.centerView}>
                <View
                style={[
                    Style.modalView,, {
                        marginTop: '85%',
                        shadowRadius: 10,
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowColor: '#000',
                        shadowOpacity: 0.25,

                    }

                ]}>
                    <Text style={Style.modalText}>
                        SELECT A TIME TO GET NOTIFIED FOR THE NOTE
                    </Text>
                    <View>
                       <Text style={{textAlign : 'center'}}>DATE
                        </Text> 
                        <TouchableOpacity style={Style.buttonHours} onPress={() => setShowPicker({...showPicker, showDate : true})}>
                           <Text style={Style.txtHours}> {currentFormattedData('date')} </Text>

                           
                        </TouchableOpacity>
                        {showPicker.showDate && ( 
                            <DateTimePicker mode="date" value={date} onChange={onChange} />
                        )}
                        <Text Style={{textAlign : 'center'}}> TIME </Text>
                        <TouchableOpacity style={Style.buttonHours} onPress={() => setShowPicker({...showPicker, showHours : true})}>
                           <Text style={Style.txtDate}> {currentFormattedData('hours')} </Text>

                           
                        </TouchableOpacity>
                        {showPicker.showHours && ( 
                            <DateTimePicker mode="time" value={date} onChange={onChange} />
                        )}

                    </View>
                    <View style={Style.modalButton}>
                        <TouchableOpacity style={[Style.button, Style.buttonSave]}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                            schedulePushNotification();
                        
                        }}>
                            <Text style={Style.txtStyle}>SAVE</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={[Style.button, Style.buttonCancel]}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                            
                        
                        }}>
                            <Text style={Style.txtStyle}>CANCEL</Text>

                        </TouchableOpacity>

                    </View>
                </View>

            </View>
       </Modal>
    )
 }
export default ModalNotification;