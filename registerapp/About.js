import { Button } from "react-native";

const About = ({ navigation }) => {
    return(
        <>
            <Text>About Page</Text>
            <Button title="Home" onPress={() => navigation.navigate("Home")}></Button>
        </>
    )
}
export default About;