import { useState } from "react"
import { Button, TextInput, View } from "react-native"


// npm i @react-navigation/native
// npm i @react-navigation/native-stack
const Login = ({navigation})=>{
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const LoginUser = ()=>{
        if(userName==="admin" && password==="1234"){
            navigation.navigate("Home")
        }else{
            alert("Invalid user")
        }
    }
    return(
        <View style={{padding:30}}>
            <TextInput placeholder="userName" onChangeText = {setUserName}></TextInput>
            <TextInput placeholder="password" onChangeText = {setPassword}></TextInput>
            <Button title="login" onPress={LoginUser}></Button>
        </View>
    )
}

export default Login