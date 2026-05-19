import { Button, Text } from "react-native";

const Home = ({ navigation }) => {
    return(
        <>
            <Text>Home Page</Text>
            <Button title="About" onPress={() => navigation.navigate("About")}></Button>
        </>
    )
}

export default Home;