
/* 1. Zona de importaciones */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


/* 2. Zona Main */
export default function Pressable() {
  return (
    <View style={styles.container}>

        <Text> Aqui va la practica de Junior </Text>
    
      <StatusBar style="auto" />

    </View>
  );
}


/* 3. Zona Estilis & Posicionamiento */
const styles = StyleSheet.create({
container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
  }
});
