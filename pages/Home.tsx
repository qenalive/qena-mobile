import { Text, Div, Button, Header, Icon, Image, Input } from "react-native-magnus";

export default function HomePage() {
  return (
    <Div
      style={{
        backgroundColor: "#fff5f7",
        height: "100%",
        width: "100%",
      }}
    >
      <Header
        position="absolute"
        bottom={0}
        w={"100%"}
        h={85}
        p="lg"
        alignment="left"
        prefix={
          <Image source={require('../assets/logo_padding.png')} w={60} h={60}></Image>
        }
        suffix={
          <Button bg="transparent">
            <Icon
              name="settings"
              fontFamily="Feather"
              color="black"
              bg="white"
              h={50}
              w={50}
              fontSize={40}
              m={3}
            />
          </Button>
        }
      >
        <Div m={5} ml={10}>
          <Input mt={-60} mb={10} w={250}>
            yes
          </Input>
          
          <Div flexDir="row">
            <Icon
              name="bell"
              fontFamily="Feather"
              fontSize={20}
              color="red500"
              bg="red200"
              borderColor="red500"
              borderWidth={1}
              h={40}
              w={40}
              m={3}
              rounded="md"
            />
            <Icon
              name="check-circle"
              fontFamily="Feather"
              fontSize={20}
              color="white"
              bg="blue500"
              h={40}
              w={40}
              m={3}
              rounded="md"
            />
            <Icon
              name="edit"
              fontFamily="Feather"
              fontSize={20}
              color="white"
              bg="gray700"
              h={40}
              w={40}
              m={3}
              rounded="md"
            />
          </Div>
        </Div>
      </Header>
      {/* <Text
        style={{
        backgroundColor: "#fff5f7",
        height: "10%",
        width: "100%",
        }}
        p="lg"
        textAlign="left"
        prefix={
          <Button bg="transparent">
            <Icon name="arrow-left" fontFamily="Feather" fontSize="2xl" />
          </Button>
        }
        suffix={
          <Button bg="transparent">
            <Icon name="more-vertical" fontFamily="Feather" />
          </Button>
        }
      ></Text> */}

      <Div m={10}>
        <Text>Activity</Text>
        <Text>Coming Soon</Text>
        <Text>Course ID:</Text>

        <Button
          onPress={() => {
            // handle sign in with Google logic
          }}
          bg="white"
          alignSelf="center"
          fontSize={20}
          fontWeight="bold"
          w={300}
          m={10}
          mb={150}
        >
          <Text color="">Join Course</Text>
        </Button>

        <Button
          onPress={() => {
            // handle sign in with Google logic
          }}
          bg="white"
          alignSelf="center"
          fontSize={20}
          fontWeight="bold"
          w={300}
          m={10}
          mb={150}
        >
          <Text color="">Join our Discord</Text>
          <Image source={require("../assets/DiscordLogo.png")} h={30} w={30} />
        </Button>
      </Div>
    </Div>
  );
}
