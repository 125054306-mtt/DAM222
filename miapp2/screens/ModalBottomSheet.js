// 1. ZONA DE IMPORTACIONES
import { useRef, useState } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// 2. COMPONENTE PRINCIPAL
export default function ModalBottomSheet() {

    // Estado para controlar si el Modal esta visible
    const [visible, setVisible] = useState(false);

    // Referencia para controlar el BottomSheet
    const bottomSheetRef = useRef(null);

    // Alturas que puede alcanzar el BottomSheet Modal
    const snapPoints = ['40%', '65%'];

    return (
        // CONTENEDOR PRINCIPAL DE LA PRACTICA
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>

                {/* TITULO Y DESCRIPCION DE LA PRACTICA */}
                <Text style={styles.titulo}>Tipos de BottomSheet</Text>
                <Text style={styles.descripcion}>Practica de Modal</Text>


                {/* =====================================
                    3. MODAL TRADICIONAL
                ===================================== */}

                {/* Boton para abrir el Modal */}
                <View style={styles.boton}>
                    <Button
                        title="Abrir Modal"
                        color="#1E90FF"
                        onPress={() => setVisible(true)}
                    />
                </View>

                {/* Modal tradicional */}
                <Modal
                    visible={visible} // Controla si aparece o permanece oculto
                    transparent={true} // Permite que el fondo sea transparente
                    animationType="fade" // Animacion al aparecer
                    onRequestClose={() => setVisible(false)} // Controla el cierre
                >

                    {/* Fondo del Modal */}
                    <View style={styles.modalFondo}>
                        <View style={styles.modalContenido}>

                            {/* Mensaje que aparece dentro del Modal */}
                            <Text style={styles.modalTitulo}>¡Hola!</Text>
                            <Text style={styles.texto}>
                                Este mensaje está dentro de un Modal.
                            </Text>

                            {/* Boton para cerrar el Modal */}
                            <Button
                                title="Cerrar"
                                color="#1E90FF"
                                onPress={() => setVisible(false)}
                            />

                        </View>
                    </View>
                </Modal>


                {/* =====================================
                    4. BOTTOMSHEET MODAL
                ===================================== */}

                {/* Boton para abrir el BottomSheet */}
                <View style={styles.boton}>
                    <Button
                        title="Abrir Modal BottomSheet"
                        color="#6C5CE7"
                        onPress={() => bottomSheetRef.current?.expand()}
                    />
                </View>

                {/* BottomSheet Modal: comienza oculto */}
                <BottomSheet
                    ref={bottomSheetRef} // Conecta la referencia con el componente
                    index={-1} // Inicia oculto
                    snapPoints={snapPoints} // Alturas disponibles del panel
                    enablePanDownToClose={true} // Permite cerrarlo deslizando hacia abajo
                >

                    {/* Contenido del BottomSheet Modal */}
                    <BottomSheetView style={styles.sheetContenido}>
                        <Text style={styles.sheetTitulo}>
                            BottomSheet Modal
                        </Text>

                        <Text style={styles.texto}>
                            Cubre parte de la pantalla y se cierra deslizando
                        </Text>

                    </BottomSheetView>
                </BottomSheet>


                {/* =====================================
                    5. BOTTOMSHEET PERSISTENT
                ===================================== */}

                {/* Este panel permanece visible desde el inicio */}
                <BottomSheet
                    index={0} // Inicia en su primera posicion
                    snapPoints={['15%', '40%']} // Alturas disponibles del panel
                    enablePanDownToClose={false} // Impide cerrarlo deslizando hacia abajo
                    backgroundStyle={{ backgroundColor: '#fff' }} // Color del fondo
                    handleIndicatorStyle={{ backgroundColor: '#aaa' }} // Color del indicador
                >

                    {/* Contenido del BottomSheet Persistent */}
                    <BottomSheetView style={styles.sheetContenido}>

                        <Text style={styles.sheetTitulo}>
                            BottomSheet Persistent
                        </Text>

                        <Text style={styles.texto}>
                            Este panel permanece siempre visible y se puede expandir o contraer.
                        </Text>

                    </BottomSheetView>
                </BottomSheet>

            </View>
        </GestureHandlerRootView>
    );
}

// 6. ZONA DE ESTILOS


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#EAF2F8',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2C3E50',
        marginBottom: 15,
        textAlign: 'center',
    },

    descripcion: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 25,
    },

    boton: {
        width: '80%',
        marginVertical: 10,
    },

    modalFondo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },

    modalContenido: {
        width: '85%',
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 15,
        alignItems: 'center',
        gap: 15,
    },

    modalTitulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#2C3E50',
    },

    texto: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
        marginBottom: 10,
    },

    sheetContenido: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    sheetTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6C5CE7',
        marginBottom: 15,
        textAlign: 'center',
    },

});