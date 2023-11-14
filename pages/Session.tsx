// BEGIN: chat-button
import React from "react";
import {
  Text,
  Div,
  Button,
  Header,
  Icon,
  Image,
  Select,
  Box,
  Drawer,
} from "react-native-magnus";
import { useNavigate } from "react-router-native";

export default function Session() {
  const navigate = useNavigate();
  const drawerRef = React.useRef<typeof Drawer>(null);

  const handleLeaveSession = () => {
    // Add your logic for leaving the session here
    navigate("/dashboard");
  };

  const handleOpenChat = () => {
    // Add your logic for opening the chat here
    if (drawerRef.current) {
      drawerRef.current.open();
    }
  };

  return (
    <>
      <Div position="absolute" style={{ bottom: 10, right: 10 }}>
        <Button m="lg" mb={0} onPress={handleLeaveSession}>
          <Icon
            name="arrow-left"
            fontFamily="Feather"
            fontSize="xl"
            color="white"
          />
        </Button>
        <Button m="lg" onPress={handleOpenChat}>
          <Icon
            name="message-circle"
            fontFamily="Feather"
            fontSize="xl"
            color="white"
          />
        </Button>
      </Div>
      <Drawer ref={drawerRef}>
        {/* Add your chat UI here */}
        <Text>Chat UI</Text>
      </Drawer>
    </>
  );
}
