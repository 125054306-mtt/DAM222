/* 1. Zona de Importaciones */
import React, { useRef, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

/* 2. Componentes Secundarios (Junior y Leonardo) */
function JuniorPractice() {
  return (
    <View style={styles.juniorContainer}>
      <Text style={styles.juniorText}>Aquí va la práctica de Junior</Text>
    </View>
  );
}

function ModalScreen() {
  return (
    <View style={styles.leonardoContainer}>
      <Text style={styles.sheetText}>Próximamente por Leonardo...</Text>
    </View>
  );
}

/* 3. Componente Principal */
export default function App() {
  // Referencias y estados para el BottomSheet Modal
  const modalSheetRef = useRef(null);
  const [abierto, setAbierto] = useState(false);
  const modalSnapPoints = ['50%'];

  const accionModalSheet = () => {
    if (abierto) {
      modalSheetRef.current?.close();
    } else {
      modalSheetRef.current?.expand();
    }
    setAbierto(!abierto);
  };

  // Referencias y puntos para el BottomSheet Persistente
  const persistentSheetRef = useRef(null);
  const persistentSnapPoints = ['15%', '50%'];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      
      <View style={styles.container}>
        <Text style={styles.title}>Tipos de BottomSheet</Text>

        {/* Práctica de Junior incorporada */}
        <JuniorPractice />

        {/* Botón para activar el BottomSheet Modal */}
        <Button
          title={abierto ? 'Cerrar Modal BottomSheet' : 'Abrir Modal BottomSheet'}
          onPress={accionModalSheet}
          color="#1E90FF"
        />

        {/* BottomSheet Modal */}
        <BottomSheet
          ref={modalSheetRef}
          index={-1}
          snapPoints={modalSnapPoints}
          enablePanDownToClose={true}
          onClose={() => setAbierto(false)}
        >
          <BottomSheetView style={styles.modalContent}>
            <Text style={styles.sheetTitle}>BottomSheet Modal</Text>
            <Text style={styles.sheetText}>
              Cubre parte de la pantalla y se cierra deslizando o tocando fuera.
            </Text>
          </BottomSheetView>
        </BottomSheet>

        {/* BottomSheet Persistente */}
        <BottomSheet
          ref={persistentSheetRef}
          index={0} // Visible por defecto
          snapPoints={persistentSnapPoints}
          enablePanDownToClose={false}
          backgroundStyle={{ backgroundColor: '#fff' }}
          handleIndicatorStyle={{ backgroundColor: '#aaa' }}
        >
          <BottomSheetView style={styles.persistentContent}>
            <Text style={styles.sheetTitle}>BottomSheet Persistent</Text>
            <Text style={styles.sheetText}>
              Este panel permanece siempre visible y se puede expandir o contraer.
            </Text>
            
            {/* Práctica de Leonardo dentro del panel persistente */}
            <ModalScreen />
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

/* 4. Estilos Unificados */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2F8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 120,
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  juniorContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  juniorText: {
    fontSize: 16,
    color: '#2c3e50',
    fontWeight: '500',
  },
  leonardoContainer: {
    marginTop: 10,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50',
  },
  sheetText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  persistentContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});