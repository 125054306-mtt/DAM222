
/* 1. Zona de importaciones */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, Text, Button} from 'react-native';
import { useState } from 'react';
import Tarjetas from './Tarjetas';
import SafeScreen from './SafeScreen';
import Pressable from './Pressable';
import TextInput from './TextInput';
import FlatList from './FlatList';
import ImageBackgroung from './ImageBackgroung';
import Modal from './Modal';
import ActivityIndicator from './ActivityIndicator';


/* 2. Zona Main */
export default function MenuScreen() {
    const[screen, setScreen]= useState('menu');
    
    switch(screen){
        case 'tarjetas':
            return <Tarjetas/>
        case 'safeScreen':
            return <SafeScreen/>
        case 'Pressable':
            return <Pressable/>
        case 'textInput':
            return <TextInput/>
        case 'FlatList':
            return <FlatList/>
        case 'imageBackgroung':
            return <ImageBackgroung/>
        case 'Modal':
            return <Modal/>
        case 'activityIndicator':
            return <ActivityIndicator/>
        case 'menu':
            default:
            return (
                <View style={styles.container}>

                    <Text> Menu de Practicas </Text>

                    <Button title ='Tarjetas' onPress={ ()=>setScreen('tarjetas') }></Button>
                    <Button title ='SafeAreaView' onPress={ ()=>setScreen('safeScreen') }></Button>
                    <Button title ='Pressable' onPress={ ()=>setScreen('Pressable') }></Button>
                    <Button title ='TextInput' onPress={ ()=>setScreen('textInput') }></Button>
                    <Button title ='FlatList' onPress={ ()=>setScreen('FlatList') }></Button>
                    <Button title ='ImageBackgroung' onPress={ ()=>setScreen('imageBackgroung') }></Button>
                    <Button title ='Modal' onPress={ ()=>setScreen('Modal') }></Button>
                    <Button title ='ActivityIndicator' onPress={ ()=>setScreen('activityIndicator') }></Button>
      
                    <StatusBar style="auto" />
                </View>
            );
    } //switch
}//función


/* 3. Zona Estilis & Posicionamiento */
const styles = StyleSheet.create({
container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
  }
});
