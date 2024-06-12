import { useEffect, useState } from "react";
import { Container, VStack, Text, Box } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coincap.io/v2/assets/bitcoin/history?interval=m1");
        const result = await response.json();
        const formattedData = result.data.map((entry) => ({
          time: new Date(entry.time).toLocaleTimeString(),
          priceUsd: parseFloat(entry.priceUsd),
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Fetch new data every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" color="white">Real-Time Bitcoin Price</Text>
        <Box width="100%" height="500px">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" stroke="#ffffff" />
              <YAxis stroke="#ffffff" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="priceUsd" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;