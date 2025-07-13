import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CgAddR } from "react-icons/cg";
import { useColorMode, useColorModeValue } from './ui/color-mode';
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

const Navbar = () => {

  const { colorMode, toggleColorMode} = useColorMode();

  return (
    <Container maxW={"1140px"} px={4} >
        <Flex 
          h={16}  
          alignItems={"center"}
          justifyContent={'space-between'}
          flexDir={{
            base:"column",
            sm:"row"
          }}>
            <Text
                fontSize={{base:"22", sm: "28"}}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient="to-r" gradientFrom="red.500" gradientTo="pink.500"
                bgClip={"text"}
            >
                <Link to={"/"}>Product Store 🛒</Link>
            </Text>
            <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button>
                          <CgAddR fontSize={20} />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                      {colorMode === "light" ? <IoMoonOutline /> : <IoSunnyOutline size={20} />}
                    </Button>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar