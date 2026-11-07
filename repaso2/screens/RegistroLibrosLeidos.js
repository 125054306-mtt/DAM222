/* 1. Zona de importaciones */
import { useState, useEffect } from 'react';
import {StyleSheet,Text, View, TextInput, Pressable, FlatList, ActivityIndicator, Alert, ImageBackground, SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';

/* 2. Zona Main */
export default function RegistroLibrosLeidos() {
    const [showSplash, setShowSplash] = useState(true);

    // Estados de los campos del formulario
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');

    // Estado para simular la espera al guardar (4 segundos)
    const [cargando, setCargando] = useState(false);

    // Lista de libros (ejemplo inicial)
    const [libros, setLibros] = useState([
    ]);

    // Temporizador para el SplashScreen (3 segundos)
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    // Función para agregar el libro
    const handleAgregarLibro = () => {
        // Validar que los campos no estén vacíos
        if (!titulo.trim() || !autor.trim() || !genero.trim()) {
            Alert.alert('Alert', 'Todos los campos son obligatorios.');
            return;
        }

        // Iniciar el ActivityIndicator por 4 segundos
        setCargando(true);

        setTimeout(() => {
            const nuevoLibro = {
                id: Date.now().toString(),
                titulo: titulo.trim(),
                autor: autor.trim(),
                genero: genero.trim(),
            };

            // Agregar a la lista y limpiar entradas
            setLibros((prev) => [nuevoLibro, ...prev]);
            setTitulo('');
            setAutor('');
            setGenero('');
            setCargando(false);

            // Notificación al terminar
            Alert.alert('Alert', 'Libro guardado correctamente.');
        }, 4000);
    };

    // Pantalla 1: Splash Screen
    if (showSplash) {
        return (
            <View style={styles.splashContainer}>
                <Text style={styles.splashTitle}>Bienvenido</Text>
                <Text style={styles.splashSub}>Registro de Libros Leídos</Text>
            </View>
        );
    }

    // Pantalla 2: Principal con fondo de imagen
    return (
        <ImageBackground
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8LG3fndvHmAJpsCCNL0bJi1eE_dKfmWmnQLR8BcH3JA0YgggVtIkqtie&s=10' }}
            style={styles.container}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.safeArea}>
                <Text style={styles.titulo}>Catálogo de Libros</Text>

                {/* Formulario */}
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Título del libro"
                        placeholderTextColor="#888"
                        value={titulo}
                        onChangeText={setTitulo}
                        editable={!cargando}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Autor"
                        placeholderTextColor="#888"
                        value={autor}
                        onChangeText={setAutor}
                        editable={!cargando}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Género"
                        placeholderTextColor="#888"
                        value={genero}
                        onChangeText={setGenero}
                        editable={!cargando}
                    />

                    <Pressable
                        style={({ pressed }) => [
                            styles.boton,
                            pressed && styles.botonPresionado,
                            cargando && styles.botonDeshabilitado,
                        ]}
                        onPress={handleAgregarLibro}
                        disabled={cargando}
                    >
                        <Text style={styles.textoBoton}>Agregar Libro</Text>
                    </Pressable>
                </View>

                {/* Indicador de carga de 4 segundos */}
                {cargando && (
                    <View style={styles.loadingBox}>
                        <ActivityIndicator size="large" color="#4a3016" />
                        <Text style={styles.loadingText}>Guardando libro...</Text>
                    </View>
                )}

                {/* Contador */}
                <Text style={styles.contador}>Total de libros: {libros.length}</Text>

                {/* Lista de libros */}
                <FlatList
                    data={libros}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.cardTitulo}> {item.titulo}</Text>
                            <Text style={styles.cardTexto}>Autor: {item.autor}</Text>
                            <Text style={styles.cardTexto}>Género: {item.genero}</Text>
                        </View>
                    )}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </SafeAreaView>
            <StatusBar style="light" />
        </ImageBackground>
    );
}

/* 3. Zona Estilos y Posicionamiento */
const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1d1305',
        width: '100%',
    },
    splashTitle: {
        color: '#efb866',
        fontSize: 32,
        fontWeight: 'bold',
    },
    splashSub: {
        color: '#fcefc3',
        fontSize: 18,
        marginTop: 5,
    },
    container: {
        flex: 1,
        width: '100%',
    },
    safeArea: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginVertical: 15,
    },
    formContainer: {
        width: '100%',
        marginBottom: 10,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
        marginBottom: 10,
    },
    boton: {
        backgroundColor: '#463e23',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 5,
    },
    botonPresionado: {
        opacity: 0.8,
    },
    botonDeshabilitado: {
        backgroundColor: '#5b5a5a',
    },
    textoBoton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loadingBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(200, 200, 200, 0.85)',
        padding: 10,
        borderRadius: 8,
        marginVertical: 10,
    },
    loadingText: {
        marginLeft: 10,
        fontSize: 15,
        color: '#333',
        fontWeight: '500',
    },
    contador: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        marginVertical: 10,
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    cardTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    cardTexto: {
        fontSize: 14,
        color: '#333',
        marginTop: 2,
    },
});