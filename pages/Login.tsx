import { Text, View } from "react-native";
import { Button, Icon, Div, Image } from "react-native-magnus";

export default function Login() {
  return (
    <Div
      style={{
        backgroundColor: "black",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require("../assets/logo_padding.png")} h={300} w={300} />
      <Button
        onPress={() => {
          // handle sign in logic
        }}
        bg="blue"
        alignSelf="center"
        fontSize={20}
        fontWeight="bold"
        w={300}
        m={10}
      >
        {/* <Image source={}></Image> */}
        Signin with NetId
      </Button>
      <Text style={{ color: "white" }}>or</Text>
      <Button
        onPress={() => {
          // handle sign in with Google logic
        }}
        bg="red"
        alignSelf="center"
        fontSize={20}
        fontWeight="bold"
        w={300}
        m={10}
        mb={150}
      >
        Sign in with Google
      </Button>
    </Div>
  );
}
