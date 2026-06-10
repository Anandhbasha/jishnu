import { NavigationContainer } from "@react-navigation/native";
import About from "./About";
import Home from "./Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

// npm i @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
const Stack = createNativeStackNavigator()
const App = ()=>{
  return(
    <NavigationContainer>
      <>
      <Text>Welcome to React</Text>
    
    </>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="About" component={About}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;