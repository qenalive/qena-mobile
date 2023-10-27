import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Stack,
  Text,
  chakra,
  useColorMode,
  Image,
  Drawer,
  DrawerContent,
} from "@chakra-ui/react";


interface LoginProps {
    onLogin: Function;
}


export default function Login ({ onLogin }: LoginProps) {
    const [isMobile, setIsMobile] = useState(false);


    return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <Box
          width="100vw"
          height="100vh"
          justifyContent="center"
          zIndex="1000"
          position="absolute"
          display="flex"
          pl="30vw"
          py="15vh"
        >
          <Image src={"gifs/Question.gif"} />
        </Box>
      )}
     
      <Drawer isOpen={true} onClose={() => {}} placement="left">
        <DrawerContent>
          <Box bg="black" height={"100%"} width={"100%"}>
            <Image src="logo_padding.png" alt="Logo" width={"100%"} />
            <Stack
              flexDir="column"
              mb="2"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <form>
                  <Stack spacing={4} p="20px">
                    <Button
                     
                      w={"full"}
                      maxW={"md"}
                      variant={"solid"}
                      bg={"blue"}
                      _hover={{ bg: "grey" }}
                      color="white"
                    >
                      <Box pr="1">
                        <Image
                          src="/husky_logo.svg"
                          alt="Custom Icon"
                          boxSize="20px"
                        />
                      </Box>
                      <Text>&nbsp;Sign in with NetID</Text>
                    </Button>
                    <p
                      style={{
                        color: "white",
                        marginTop: "-2px",
                        marginLeft: "135px",
                      }}
                    >
                      (recommended)
                    </p>
                   
                      <Center>
                        <Text>Sign in with Google</Text>
                      </Center>
                   
                  </Stack>
                </form>
              </Box>
            </Stack>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
}


