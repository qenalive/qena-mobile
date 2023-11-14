import { useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import {
  Text,
  Div,
  Button,
  Header,
  Icon,
  Image,
  Input,
  Avatar,
  Select,
} from "react-native-magnus";
import { Outlet } from "react-router-native";

export default function Navbar() {
  const selectRef = useRef(null);
  const [selectValue, setSelectedValue] = useState(null);

  const onSelectOption = (value: any) => {
    setSelectedValue(value);
  };

  return (
    <SafeAreaView>
      <Div
        style={{
          backgroundColor: "#fff5f7",
          height: "100%",
          width: "100%",
        }}
      >
        <Header
          w={"100%"}
          h={85}
          bg="black"
          alignment="left"
          prefix={
            <Image
              source={require("../assets/logo_padding.png")}
              w={80}
              h={80}
            ></Image>
          }
          suffix={
            <Avatar bg="red300" color="red800">
              A
            </Avatar>
          }
        >
          <Div m={10} flexWrap="wrap">
            <Button
              w={150}
              block
              bg="white"
              color="gray900"
              borderColor="gray300"
              onPress={() => {
                if (selectRef.current) {
                  selectRef.current.open();
                }
              }}
            >
              {selectValue?.length ? selectValue.toString() : "Dashboard"}
            </Button>
            <Button ml={10} p={10} mt={3}>
              <Text color="white">&nbsp;+&nbsp;</Text>
            </Button>
          </Div>
        </Header>
        <Outlet />
        <Select
          onSelect={onSelectOption}
          ref={selectRef}
          value={selectValue}
          title="Select your class"
          message=""
          roundedTop="xl"
          data={["MCB 3150", "CSE 2225", "CSE 1233", "CSE 3241", "CSE 4374"]}
          renderItem={(item, index) => (
            <Select.Option value={item} py="md" px="xl">
              <Text>{item}</Text>
            </Select.Option>
          )}
        />
      </Div>
    </SafeAreaView>
  );
}
