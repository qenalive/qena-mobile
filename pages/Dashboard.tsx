import React, { useState, useRef } from "react";
import { Button, Select, Div, Text, Image } from "react-native-magnus";
import { useNavigate } from "react-router-native";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Div
      bg={"grey"}
      w={"100%"}
      h={"100%"}
      p={50}
      justifyContent={"center"}
      alignItems={"flex-end"}
    >
      <Button block bg="blue500" mt="lg">
        <Text color="white">Join our Discord</Text>
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
    </Div>
  );
}
