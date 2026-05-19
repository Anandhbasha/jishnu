import { NavigationContainer } from "@react-navigation/native";
import About from "./About";
import Home from "./Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// npm i @react-navigation/native
// npm i @react-navigation/native-stack
const Stack = createNativeStackNavigator()
const App = ()=>{
  return(
    <NavigationContainer>
      <>
      <h1>Welcome to React</h1>
    
    </>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="About" component={About}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;