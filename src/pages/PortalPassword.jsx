import { useState } from 'react';
import {
    Flex, Button, Text, Input, Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
} from '@chakra-ui/react'

import { IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline } from "react-icons/io";
import Portal from "../assets/Portal.gif"
export default function PortalPassword() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [Answer, setAnswer] = useState('');

    const checkAnswer = () => {
        if (Answer === import.meta.env.VITE_ANSWER_PortalPassword) {
            return 'Congratulations!';
        } else {
            return 'Try Again!';
        }
    }

    return (
        <>
            <Flex height={'100vh'} width={'100%'} justify={'center'} align={"center"} flexDir={'column'} fontFamily={'onesize'} gap={'30px'} backgroundSize={"cover"} backgroundImage={`url(${Portal})`}>
                <Text textAlign={'center'} fontSize={'120px'} color={'white'}>Portal Password</Text>
                <Input fontSize={'60px'} width={'500px'} height={'15%'} placeholder='Your Answer' value={Answer} onChange={(e) => setAnswer(e.target.value)} />
                <Button fontSize={'50px'} mt={'20px'} width={'40%'} height={'15%'} onClick={onOpen}>Enter</Button>
            </Flex>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                size={"xl"}
                bgColor={"transparent"}
            >
                <ModalOverlay />
                <ModalContent fontFamily={'onesize'} py={'50px'}>
                    <Text textAlign={"center"} fontSize={"50px"} pb={'20px'}>{checkAnswer()}</Text>
                    <ModalBody>
                        <Flex display={checkAnswer() === 'Congratulations!' ? "flex" : "none"} justifyContent="center">
                            <IoMdCheckmarkCircleOutline fontSize={'150px'} color='green'/>
                        </Flex>
                        <Flex display={checkAnswer() === 'Try Again!' ? "flex" : "none"} justifyContent="center">
                            <IoMdCloseCircleOutline fontSize={'150px'} color='red'/>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}