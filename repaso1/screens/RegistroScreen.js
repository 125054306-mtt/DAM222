/* 1. Zona de importaciones */
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Button, Alert, ScrollView } from 'react-native';

/* 2. Zona Main */
export default function RegistroScreen() {
  // Estados para los TextInput
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [cuatrimestre, setCuatrimestre] = useState('');

  // Estados para los Switch
  const [asistiraTaller, setAsistiraTaller] = useState(false);
  const [requiereConstancia, setRequiereConstancia] = useState(false);
  const [participaraDeportes, setParticiparaDeportes] = useState(false);

  // Funcion para validar y enviar el registro
  const handleEnviar = () => {
    // Validar campos vacios
    if (!nombre.trim() || !carrera.trim() || !cuatrimestre.trim()) {
      Alert.alert('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    // Validar que semestre sea numero
    if (isNaN(cuatrimestre)) {
      Alert.alert('Error', 'El semestre debe ser un número.');
      return;
    }

    // Mostrar resumen de registro
    Alert.alert(
      'Registro enviado',
      `Nombre: ${nombre}\nCarrera: ${carrera}\nCuatrimestre: ${cuatrimestre}\n\nTaller: ${asistiraTaller ? 'Sí' : 'No'}\nConstancia: ${requiereConstancia ? 'Sí' : 'No'}\nDeportes: ${participaraDeportes ? 'Sí' : 'No'}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registro de Evento Universitario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />

      <TextInput
        style={styles.input}
        placeholder="Cuatrimestre"
        keyboardType="numeric"
        value={cuatrimestre}
        onChangeText={setCuatrimestre}
      />

      <Text style={styles.subtitulo}>Opciones</Text>

      <View style={styles.optionRow}>
        <Text style={styles.label}>¿Asistirá al taller?</Text>
        <Switch
          value={asistiraTaller}
          onValueChange={setAsistiraTaller}
        />
      </View>

      <View style={styles.optionRow}>
        <Text style={styles.label}>¿Requiere constancia?</Text>
        <Switch
          value={requiereConstancia}
          onValueChange={setRequiereConstancia}
        />
      </View>

      <View style={styles.optionRow}>
        <Text style={styles.label}>¿Participará en deportes?</Text>
        <Switch
          value={participaraDeportes}
          onValueChange={setParticiparaDeportes}
        />
      </View>

      <View style={styles.btnContainer}>
        <Button title="Enviar Registro" onPress={handleEnviar} />
      </View>
    </ScrollView>
  );
}

/* 3. Zona Estilos & Posicionamiento */
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fafafa',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 15,
    color: '#333',
  },
  btnContainer: {
    marginTop: 20,
  },
});