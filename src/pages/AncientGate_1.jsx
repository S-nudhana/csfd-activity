import { useState } from "react";
import {
  Flex,
  Button,
  Text,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import gate1 from "../assets/gate1.png";
import gate from "../assets/gate.webp";
import { useNavigate } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import {
  IoMdCheckmarkCircleOutline,
  IoMdCloseCircleOutline,
} from "react-icons/io";

export default function AncientGate_1() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const Answer = value1 + value2 + value3 + value4 + value5;

  const checkAnswer = () => {
    if (Answer === import.meta.env.VITE_ANSWER_AncientGate_1) {
      return "Congratulations!";
    } else {
      return "Try Again!";
    }
  };

  const handleChange = (setter) => (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 2) {
      setter(value);
    }
  };

  return (
    <>
      <Flex
        position={"relative"}
        color={"white"}
        height={"100vh"}
        width={"100%"}
        justify={"center"}
        align={"center"}
        flexDir={"column"}
        fontFamily={"onesize"}
        gap={"30px"}
        backgroundImage={`url(${gate1})`}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
      >
        {/* <Flex
          position="absolute"
          top="0"
          left="0"
          height="100%"
          width="100%"
          backgroundColor="rgba(0, 0, 0, 0.3)"
          zIndex="-2"
        /> */}
        <Text textAlign={"center"} fontSize={"100px"}>
          Ancient Gate
        </Text>
        <Text textAlign={"center"} fontSize={"30px"}>
          hint: 5 numbers
        </Text>
        <Flex direction="column" align="center">
          <Flex justify="center" gap="20px">
            <Input
              fontSize="60px"
              width="110px"
              height="70px"
              placeholder="--"
              value={value1}
              maxLength={2}
              textAlign="center"
              onChange={handleChange(setValue1)}
            />
            <Input
              fontSize="60px"
              width="110px"
              height="70px"
              placeholder="--"
              value={value2}
              maxLength={2}
              textAlign="center"
              onChange={handleChange(setValue2)}
            />
            <Input
              fontSize="60px"
              width="110px"
              height="70px"
              placeholder="--"
              value={value3}
              maxLength={2}
              textAlign="center"
              onChange={handleChange(setValue3)}
            />
            <Input
              fontSize="60px"
              width="110px"
              height="70px"
              placeholder="--"
              value={value4}
              maxLength={2}
              textAlign="center"
              onChange={handleChange(setValue4)}
            />
            <Input
              fontSize="60px"
              width="110px"
              height="70px"
              placeholder="--"
              value={value5}
              maxLength={2}
              textAlign="center"
              onChange={handleChange(setValue5)}
            />
          </Flex>
        </Flex>
        <Button
          fontSize="50px"
          mt="20px"
          width="40%"
          height="15%"
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
              flexDir="column"
              display={checkAnswer() === "Congratulations!" ? "flex" : "none"}
              align="center"
            >
              {" "}
              <Text fontSize={"25px"}>
                You have unlocked the gate!
              </Text>
              <Text fontSize={"25px"} color={"red"}>
                But oh no! There’s another gate😱
              </Text>
              <Image src={gate} alt="gate" width={"300px"} />
              <Button
                width={"200px"}
                height={"50px"}
                fontSize={"20px"}
                mt={"20px"}
                onClick={() => {
                  navigate("/AnotherGateTheSecond");
                }}
                bgColor={"#FFD700"}
                _hover={{ bgColor: "#FFC107" }}
              >
                Next Gate <MdNavigateNext />
              </Button>
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
