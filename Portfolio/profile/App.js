import {  NavigationContainer } from "@react-navigation/native"
import Login from "./Screens/Login"
import Home from "./Screens/Home"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()
const App = ()=>{
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  initialRouterName="Login"/>
        <Stack.Screen name ="Login" components = {<Login/>} />
        <Stack.Screen name ="Home" components = {<Home/>} />
      </Stack.Navigator>
  </NavigationContainer>
}
export default App