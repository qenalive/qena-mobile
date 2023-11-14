import { SafeAreaView } from "react-native";
import { Button, Text, Div, Image } from "react-native-magnus";
import { useNavigate } from "react-router-native";

export default function Login() {
  const navigate = useNavigate();

  return (
    <SafeAreaView>
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
          bg="gray700"
          alignSelf="center"
          fontSize={20}
          fontWeight="bold"
          w={300}
          m={10}
        >
          <Image source={require("../assets/husky.jpeg")} h={40} w={40} />
          <Text color="white" ml={3} fontSize={20} fontWeight="bold">
            Sign in with NetId
          </Text>
        </Button>
      </Div>
    </SafeAreaView>
  );
}
