import { Button, Text, View } from "react-native"

const Login = ({navigation})=>{
    return(
        <View style={{flex:1,justifyContent:"center",allignItems:"center"}}>
            <Text>Login Page</Text>
            <Button title="Home" onPress={()=>{
                navigation.navigate("Home") 
            }}/>
        </View>
    )
}
export default Login