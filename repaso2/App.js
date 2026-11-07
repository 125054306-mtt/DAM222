import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistroLibrosLeidos from './screens/RegistroLibrosLeidos';

export default function App() {
  return (
    <RegistroLibrosLeidos></RegistroLibrosLeidos>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
