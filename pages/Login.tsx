import { Button, Text, Div, Image } from "react-native-magnus";
import { useNavigate } from "react-router-native";

export default function Login() {
  const navigate = useNavigate();

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
          navigate("/dashboard");
        }}
        bg="blue"
        alignSelf="center"
        fontSize={20}
        fontWeight="bold"
        w={300}
        m={10}
      >
        {/* <Image source={}></Image> */}
        Sign in with NetId
      </Button>
      <Button
        onPress={() => {
          navigate("/session");
        }}
        bg="blue"
        alignSelf="center"
        fontSize={20}
        fontWeight="bold"
        w={300}
        m={10}
      >
        {/* <Image source={}></Image> */}
        Go to Session
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
