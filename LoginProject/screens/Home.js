import React from "react";

import {
  View,
  Text,
  StyleSheet
} from "react-native";

const Home = ({ route }) => {

  const { username } = route.params;

  return (

    <View style={styles.container}>

      <Text style={styles.text}>
        Welcome {username}
      </Text>

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