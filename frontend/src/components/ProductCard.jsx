import { Box, Heading, HStack, IconButton, Image, Text } from '@chakra-ui/react'
import { transform } from 'framer-motion'
import React from 'react'
import { LiaEdit } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";
import { useColorModeValue } from './ui/color-mode';

const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");
  return (
    <Box
        shadow="lg"
        rounded={"lg"}
        overflow={"hidden"}
        transition={"all 0.3s"}
        _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
        bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit={"cover"}/>
        <Box p={4}>
            <Heading as={'h3'} size={'md'} mb={2}>
                {product.name}
            </Heading>
            <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>
                ${product.price}
            </Text>

            <HStack spacing={2}>
                  <IconButton _icon={<LiaEdit />}  colorScheme={"blue"}/>
                  <IconButton _icon={<MdDeleteOutline />}  colorScheme={"red"} />
            </HStack>
            
        </Box>
    </Box>
  )
}

export default ProductCard

// onClick = { onOpen }
// onClick = {()=> handleDelete(product.id)}