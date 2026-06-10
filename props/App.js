import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import ButtonPage from './ButtonPage';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>MainPage</Text>
      <StatusBar style="auto" />
      <ButtonPage value = "click"/>
      <ButtonPage value = "login"/>
      <ButtonPage value = "Save"/>
      <ButtonPage value = "Delete"/>
      <ButtonPage value = "Edit"/>
      <ButtonPage value = "logout"/>
    </View>
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
