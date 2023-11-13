// import React, { useState } from "react";
// import { Text, Div, Button, Header, Icon, Image, Select } from "react-native-magnus";

// export default function HomePage() {
//   const [selectValue, setSelectedValue] = useState(null);
//   const selectRef = React.createRef()

//   function onSelectOption(value: any): void {
//     throw new Error("Function not implemented.");
//   }

//   return (

//     <Div bg="#fff5f7" h="100%" w="100%" >
//       <Header

//         borderBottomWidth={1}
//         borderBottomColor="gray200"
//         alignment="center"
//         bg="black"
//         pt="xl"
//         pb={0}  
//         pl={0}
//         prefix={
//           <Button bg="transparent">
//             <Image source={require("../assets/logo_padding.png")} h={100} w={100} />
//           </Button>
//         }
//       >
//         <Button
//           flex={1}
//           block
//           borderWidth={1}
//           bg="white"
//           color="gray900"
//           borderColor="gray300"
//           // onPress={() => {
//           //   if (selectRef.current) {
//           //     selectRef.current.open();
//           //   }
//           // }}
//           >
//           {/* {selectValue.length ? selectValue.toString() : 'Select'} */}
//           yes
//         </Button>
//         {/* <Select
//           onSelect={onSelectOption}
//           ref={selectRef}
//           value={selectValue}
//           title="This is your title"
//           mt="md"
//           pb="2xl"
//           message="This is the long message used to set some context"
//           roundedTop="xl"
//           data={[1, 2, 3, 4, 5, 6]}
//           renderItem={(item, index) => (
//             <Select.Option value={item} py="md" px="xl">
//               <Text>Option {index}</Text>
//             </Select.Option>
//           )}
//         /> */}
//       </Header>
//       {/* <Text
//         style={{
//         backgroundColor: "#fff5f7",
//         height: "10%",
//         width: "100%",
//         }}
//         p="lg"
//         textAlign="left"
//         prefix={
//           <Button bg="transparent">
//             <Icon name="arrow-left" fontFamily="Feather" fontSize="2xl" />
//           </Button>
//         }
//         suffix={
//           <Button bg="transparent">
//             <Icon name="more-vertical" fontFamily="Feather" />
//           </Button>
//         }
//       ></Text> */}


//       <Div m={10}>
//         <Text fontSize="6xl">Activity</Text>
//         <Text>Coming Soon</Text>
//         <Text>Course ID:</Text>

//         <Button
//           onPress={() => {
//             // handle sign in with Google logic
//           }}
//           bg="white"
//           alignSelf="center"
//           fontSize={20}
//           fontWeight="bold"
//           w={300}
//           m={10}
//           mb={150}
//         ><Text color="">Join Course</Text>
//         </Button>

//         <Button
//           onPress={() => {
//             // handle sign in with Google logic
//           }}
//           bg="white"
//           alignSelf="center"
//           fontSize={20}
//           fontWeight="bold"
//           w={300}
//           m={10}
//           mb={150}
//         >

//           <Text color="">Join our Discord</Text><Image source={require("../assets/DiscordLogo.png")} h={30} w={30} /></Button>
//       </Div>
//     </Div>
//   );
// }


// import React, { useState, useRef } from "react";
// import { Button, Select, Div, Text } from "react-native-magnus";
// import { useNavigate } from "react-router-native";

// export default function SettingsPage() {
//   const [hall, setHall] = useState<string>("");
//   const [selectValue, setSelectedValue] = useState(null);
//   const selectRef = useRef(null);
//   const navigate = useNavigate();

//   const onSelectOption = (value: any) => {
//     setSelectedValue(value);
//   };



//   return (
//     <>
    
//       < Button
//         flex={1}
//         block
//         borderWidth={1}
//         bg="white"
//         color="gray900"
//         borderColor="gray300"
//         onPress={() => {
//           if (selectRef.current) {
//             selectRef.current.open();
//           }
//         }}>
//         {selectValue.length ? selectValue.toString() : 'Select'}
//       </Button >

//       <Select
//         onSelect={onSelectOption}
//         ref={selectRef}
//         value={selectValue}
//         title="This is your title"
//         mt="md"
//         pb="2xl"
//         message="This is the long message used to set some context"
//         roundedTop="xl"
//         data={[1, 2, 3, 4, 5, 6]}
//         renderItem={(item, index) => (
//           <Select.Option value={item} py="md" px="xl">
//             <Text>Option {index}</Text>
//           </Select.Option>
//         )}
//       />
//     </>
//   )
//         }




import React, { useState, useRef } from "react";
import { Button, Select, Div, Text, Image } from "react-native-magnus";
import { useNavigate } from "react-router-native";


export default function SettingsPage() {
  const [hall, setHall] = useState<string>("");
  const [selectValue, setSelectedValue] = useState(null);
  const selectRef = useRef(null);
  const navigate = useNavigate();


  const onSelectOption = (value: any) => {
    setSelectedValue(value);
  };



  return (
    <Div
      bg={"grey"}
      w={"100%"}
      h={"100%"}
      p={50}
      justifyContent={"center"}
      alignItems={"flex-end"}
    >
      <Button
        block
        borderWidth={4}
        bg="white"
        color="gray900"
        borderColor="gray300"
        onPress={() => {
          if (selectRef.current) {
            selectRef.current.open();
          }
        }}
      >
        {selectValue?.length ? selectValue.toString() : "Create Class"}

      </Button>

      <Button
        block
        borderWidth={4}
        bg="white"
        color="gray900"
        borderColor="gray300"
        onPress={() => {
          if (selectRef.current) {
            selectRef.current.open();
          }
        }}
      >
        {selectValue?.length ? selectValue.toString() : "Course ID"}
      </Button>

      <Button
        block
        borderWidth={4}
        bg="white"
        color="gray900"
        borderColor="gray300"
        onPress={() => {
          if (selectRef.current) {
            selectRef.current.open();
          }
        }}
      >
        {selectValue?.length ? selectValue.toString() : "Join Course"}
        {/* <Text><Image source={require("../assets/DiscordLogo.png")} h={30} w={30} /></Text> */}
      </Button>
      
      <Select
        onSelect={onSelectOption}
        ref={selectRef}
        value={selectValue}
        title="Only the following dorms have the system set up:"
        message="email reslife at livingoncampus@uconn.edu if you enjoy laundryconn or if you want it in your dorm!"
        roundedTop="xl"
        data={["Snow"]}
        renderItem={(item, index) => (
          <Select.Option value={item} py="md" px="xl">
            <Text>{item}</Text>
          </Select.Option>
        )}
      />
    
      <Button
        block
        bg="blue500"
        mt="lg"
      >
        <Text color="white">Join our Discord</Text>
      </Button>


    </Div>
  );
}