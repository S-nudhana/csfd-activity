import { useState } from "react";
import {
  Flex,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  PinInput,
  PinInputField,
  HStack,
  Image,
} from "@chakra-ui/react";
import treasure from "../assets/treasure.png";
import {
  IoMdCheckmarkCircleOutline,
  IoMdCloseCircleOutline,
} from "react-icons/io";

import gate3 from "../assets/gate3.png";
export default function AncientGate_3() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Answer, setAnswer] = useState("");

  const checkAnswer = () => {
    if (Answer === import.meta.env.VITE_ANSWER_AncientGate_3) {
      return "Congratulations!";
    } else {
      return "Try Again!";
    }
  };

  const handlePinChange = (value) => {
    setAnswer(value);
  };

  return (
    <>
      <Flex
        height={"100vh"}
        width={"100%"}
        justify={"center"}
        align={"center"}
        flexDir={"column"}
        fontFamily={"onesize"}
        gap={"30px"}
        backgroundImage={`url(${gate3})`}
        backgroundSize={"cover"}
        color={"white"}
      >
        <Text textAlign={"center"} fontSize={"60px"}>
          Last_real_final_notLie Ancient Gate
        </Text>
        <Text textAlign={"center"} fontSize={"40px"} color={"red"}>
          "90 106 122 72"
        </Text>

        <HStack>
          <PinInput
            placeholder="-"
            value={Answer}
            onChange={handlePinChange}
            type="alphanumeric"
          >
            <PinInputField fontSize={"70px"} width={"100px"} height={"100px"} />
            <PinInputField fontSize={"70px"} width={"100px"} height={"100px"} />
            <PinInputField fontSize={"70px"} width={"100px"} height={"100px"} />
            <PinInputField fontSize={"70px"} width={"100px"} height={"100px"} />
          </PinInput>
        </HStack>

        <Text textAlign={"center"} fontSize={"30px"}>
          hint: +50 then ASCII
        </Text>
        <Button
          fontSize={"50px"}
          mt={"20px"}
          width={"40%"}
          height={"15%"}
          onClick={onOpen}
        >
          Enter
        </Button>
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={"xl"}
        bgColor={"transparent"}
      >
        <ModalOverlay />
        <ModalContent fontFamily={"onesize"} py={"50px"}>
          <Text textAlign={"center"} fontSize={"50px"} pb={"20px"}>
            {checkAnswer()}
          </Text>
          <ModalBody>
            <Flex
              display={checkAnswer() === "Congratulations!" ? "flex" : "none"}
              align="center"
              flexDir='column'
            >
              <Text textAlign={"center"}  fontSize={"30px"} color={"green"}>
                Hooray! 
              </Text>   <Text textAlign={"center"}  fontSize={"30px"} color={"green"}>
                 You got the treasure! 🎉🤩
              </Text>

              <Image src={treasure} alt="treasure" width={"300px"} />
            </Flex>
            <Flex
              display={checkAnswer() === "Try Again!" ? "flex" : "none"}
              justifyContent="center"
            >
              <IoMdCloseCircleOutline fontSize={"150px"} color="red" />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
