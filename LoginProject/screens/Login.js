import React, { useState } from "react";
//npm install @react-navigation/native-stack
//npx expo install react-native-screens react-native-safe-area-context
//npm install react-native-screens react-native-safe-area-context
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";

const Login = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (username === "admin" && password === "1234") {

      navigation.navigate("Home", {
        username: username
      });

    } else {

      Alert.alert("Invalid Username or Password");

    }

  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Login Page
      </Text>

      <TextInput
        placeholder="Enter Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Enter Password"
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >

        <Text style={styles.buttonText}>
          Login
        </Text>

      </TouchableOpacity>

    </View>

  );

};

export default Login;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff"
  },

  title: {
    fontSize: 35,
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold"
  },

  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    fontSize: 18
  },

  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20
  }

});