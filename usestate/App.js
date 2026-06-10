import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  let [count,setCount] =useState(0)
  const [bg,setBg] = useState("dark")
  const handleCount = ()=>{
    setCount(++count)
  }
  const handleBg = ()=>{
    setBg(bg==="dark"?"light":"dark")
  }
  return (
    <View style={{flex: 1,backgroundColor:bg==="dark"?"black":"white",alignItems: 'center',justifyContent: 'center'}}>
      <Text>{count}</Text>
      <Button title='AddCount' onPress={handleCount}></Button>
      <Button title={bg} onPress={handleBg}></Button>

    </View>
  );
}

