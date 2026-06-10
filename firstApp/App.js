// import { Button, Image, Text, TextInput, View } from "react-native"

import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

// export default function App(){
//   return(
//     <View style={{padding:20}}>
//       <Text style={{fontSize:20}}>Hello React Native</Text>
//       <TextInput placeholder="Enter the name" style={{borderRadius:15,marginVertical:10}}></TextInput>
//       <Button title="Click Me" onPress={()=>alert("Button Pressed")}></Button>
//       <Image source={require("./assets/Image.jpg")} style={{width:400,height:400}}></Image>
//     </View>
//   )
// }

// export default function App(){
//   return(
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello Jishnu</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container:{
//     backgroundColor:"red",
//     padding:40
//   },
//   text:{
//     fontSize:30,
//     color:"white",
//     fontWeight:"bold",
//     textAlign:"underline"
//   }
// })


export default function App(){
  const [name,setName] = useState("")
  return(
    <View style={{padding:40}}> 
        <TextInput placeholder="Enter the Name" onChangeText={(value)=>setName(value)} />
          <Text>Hello {name}</Text>
    </View>
  )
}