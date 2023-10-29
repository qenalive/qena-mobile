import { Text, Div, Button, Header, Icon, Image} from "react-native-magnus";

export default function HomePage() {
    
  return (
    <Div 
      style={{
        backgroundColor: "#fff5f7",
        height: "100%",
        width: "100%",
      }}
    >
      <Text
        style={{
        backgroundColor: "#fff5f7",
        height: "10%",
        width: "100%",
        }}
        p="lg"
        alignment="left"
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
      ></Text>
        
      
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
          ><Text color="">Join Course</Text>
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
            
            <Text color="">Join our Discord</Text><Image source={require("../assets/DiscordLogo.png")} h={30} w={30} /></Button>
      </Div>
    </Div>
  );
}
