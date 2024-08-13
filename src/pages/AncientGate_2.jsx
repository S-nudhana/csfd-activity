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
  Image
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import gate from "../assets/gate.webp";
import gate2 from "../assets/gate2.png";
import { MdNavigateNext } from "react-icons/md";
import {
  IoMdCheckmarkCircleOutline,
  IoMdCloseCircleOutline,
} from "react-icons/io";

export default function AncientGate_2() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const Answer = value1 + value2 + value3 + value4;

  const checkAnswer = () => {
    if (Answer === import.meta.env.VITE_ANSWER_AncientGate_2) {
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
      color={"white"}
        height={"100vh"}
        width={"100%"}
        justify={"center"}
        align={"center"}
        flexDir={"column"}
        fontFamily={"onesize"}
        gap={"30px"}
        backgroundImage={`url(${gate2})`}
        backgroundSize={"cover"}
      >
        <Text textAlign={"center"} fontSize={"80px"}>
          Ancient Gate the Second
        </Text>
        <Text textAlign={"center"} fontSize={"30px"}>
          hint: 2, 6, 12, 20, 30, ...
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
                 <Text fontSize={"25px"}>
                Yippie the gate is unlocked!
              </Text>
              <Text fontSize={"25px"} color={"red"}>But there's another gate again😔😭</Text>
              <Image src={gate} alt="gate" width={"300px"}/>
              <Button
                width={"200px"}
                height={"50px"}
                fontSize={"20px"}
                mt={"20px"}
                onClick={() => {
                  navigate("/RealLastFinalGateOMG");
                }}
                bgColor={"#FFD700"}
                _hover={{ bgColor: "#FFC107" }}
              >
                Last Gate! <MdNavigateNext />
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
