
/* 1. Zona de importaciones */
import { useState } from 'react';
import { View, Image, Pressable, Switch, StyleSheet, Text} from 'react-native';
import SwitchEjemplo from '../components/SwitchEjemplo';

/* 2. Zona Main */
export default function PressableScreen() {

const [imagenGrande, setImagenGrande] = useState(false)
const [oscuro, setOscuro] = useState(false)

  return (
    <View style={[styles.container, {backgroundColor: oscuro ? '#000000' : '#FFFFFF'}]}> 
      <Pressable

      >
        <Text> Presioname </Text>
      </Pressable>

      <Pressable
        onPress={() => setImagenGrande(!imagenGrande)}
      >
        <Image
        source={require("../assets/wave.png")}
        style={[
            imagenGrande ? styles.imagenGrande : styles.image

        ]}
        
        />
      </Pressable>

      <SwitchEjemplo
        oscuro={oscuro}
        cambiarModo={setOscuro}
      />

    </View>
  );
}


/* 3. Zona Estilis & Posicionamiento */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 20,
        marginBottom: 20
    },
    image: {
        width: 100,
        height: 100,
    },
    imagenGrande: {
        width: 180,
        height: 180,
    }
})