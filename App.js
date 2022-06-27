import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Screens 
import Home from './screens/HomeScreen'

export default function App() {
  return (
    <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    color: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
