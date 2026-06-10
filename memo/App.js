import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count,setCount] = useState(0)
  const[name,setName] = useState("Jishnu")

  const square = useMemo(()=>{
    console.log("Calc function......");
    return count * count    
  },[count])
  return (
    <View style={styles.container}>
        <Text>Count:{count}</Text>
        <Text>Square:{square}</Text>
        <Text>Name:{name}</Text>
        <Button title={"Increment"} onPress={()=>setCount(count+1)}></Button>
        <Button title={"changeName"} onPress={()=>setName("Anandh")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:100
  },
});
