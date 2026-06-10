import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";

const Home = ({ navigation }) => {

  const[user,setUser] = useState("")

  useEffect(()=>{
    getUser()
  },[])
  const getUser = async()=>{
    const userName = await AsyncStorage.getItem("user")
    setUser(userName)
  }
  const logout = async()=>{
    await AsyncStorage.removeItem("user")
    navigation.navigate("Login")
  }
  return (

    <View style={styles.container}>

      <Text style={styles.text}>
        Welcome {user}
      </Text>
      <Text>This is Next Logout</Text>
      <Button title="Logout" onPress={logout}></Button>

    </View>

  );

};

export default Home;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    fontSize: 30,
    fontWeight: "bold"
  }

});