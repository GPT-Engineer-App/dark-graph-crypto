import { Container, Text, VStack } from "@chakra-ui/react";
import CryptoPriceGraph from "../components/CryptoPriceGraph";

// Example of using react-icons
// import { FaRocket } from "react-icons/fa";
// <IconButton aria-label="Add" icon={<FaRocket />} size="lg" />; // IconButton would also have to be imported from chakra

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" color="white">Cryptocurrency Price Graph</Text>
        <CryptoPriceGraph />
      </VStack>
    </Container>
  );
};

export default Index;
