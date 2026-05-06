import { Button, Text, TextInput, View } from "react-native"

export default function App(){
  return(
    <View style={{padding:20}}>
      <Text style={{fontSize:20}}>Hello React Native</Text>
      <TextInput placeholder="Enter the name" style={{borderRadius:15,marginVertical:10}}></TextInput>
      <Button title="Click Me" onPress={()=>alert("Button Pressed")}></Button>
    </View>
  )
}