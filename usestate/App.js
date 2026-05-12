import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  let [count,setCount] =useState(0)
  const handleCount = ()=>{
    setCount(++count)
  }
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button title='AddCount' onPress={handleCount}></Button>
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
