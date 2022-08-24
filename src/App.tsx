import React, { useState } from "react";
import { Flex, Heading, Container } from "@chakra-ui/react";
import { WeatherData } from "./interface/WeatherData";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Image } from "@chakra-ui/react";

function App() {
  const [data, setData] = useState<WeatherData>(null);

  return (
    <Flex as="main" height="100vh" justifyContent="center" w="100%">
      <Image
        src="./assets/sunset.jpg"
        zIndex={1}
        boxSize="100%"
        position="absolute"
      />
      <Container as="section" paddingY={4} centerContent zIndex={2}>
        <Header data={data} setData={setData} />
        <Flex direction="column" paddingY={5} w="100%">
          <Flex id="location" alignContent="flex-start">
            {data ? <Heading variant="title">{data.name}</Heading> : null}
          </Flex>
          <Flex id="temp">
            {data ? (
              <Heading variant="title">{data.main.temp.toFixed()}°C</Heading>
            ) : null}
          </Flex>
          <Flex id="description">
            {data ? (
              <Heading variant="title">{data.weather[0].main}</Heading>
            ) : null}{" "}
          </Flex>
        </Flex>
        <Footer data={data} />
      </Container>
    </Flex>
  );
}

export default App;
