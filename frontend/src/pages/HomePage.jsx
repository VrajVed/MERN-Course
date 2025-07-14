import ProductCard from '../components/ProductCard.jsx'
import { useProductStore } from '../store/product.js'
import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {

  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);



  return (
    <Container maxW={"container.xl"} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"3xl"}
          fontWeight={'bold'}
          bgGradient="to-r" gradientFrom="blue.500" gradientTo="red.500"
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products 🚀
        </Text>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          spacing={10}
          w={'full'}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        <Text fontSize={"xl"} textAlign={"center"}>
          No products found 😭😭😭{" "}
          <Link to={"/create"}>
            <Text as="span" color="blue.500" _hover={{ textDecoration: "underline" }}>
              Create a Product !
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  )
}

export default HomePage