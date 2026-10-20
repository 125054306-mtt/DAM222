
/* 1. Zona de importaciones */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludos2} from './components/Saludos2';
import { Perfil } from './components/Perfil';



/* 2. Zona Main */
export default function App() {
  return (
    <View style={styles.container}>
      
      <Perfil style={styles.tarjeta1} nombre="Genaro" carrera="ITIID" materia="Movil" cuatri="4"/>

      <Perfil style={styles.tarjeta2} nombre="Emilio" carrera="ITIID" materia="Movil" cuatri="4"/>

      <Perfil style={styles.tarjeta3} nombre="Jenny" carrera="ITIID" materia="Movil" cuatri="4"/>

      <StatusBar style="auto" />

    </View>
  );
}


/* 3. Zona Estilis & Posicionamiento */
const styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  },
  tarjeta1:{backgroundColor:'purple'},
  tarjeta2:{backgroundColor:'yellow'},
  tarjeta3:{backgroundColor:'pink'},
});
