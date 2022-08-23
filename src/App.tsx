import React, { useState } from "react";
import { Flex, Heading, Container } from "@chakra-ui/react";
import { WeatherData } from "./interface/WeatherData";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [data, setData] = useState<WeatherData>(null);

  return (
    <Flex as="main">
      <Container>
        <Header data={data} setData={setData} />
        <Flex id="location">
          {data ? <Heading>Location: {data.name}</Heading> : null}
        </Flex>
        <Flex id="temp">
          {data ? <Heading>{data.main.temp.toFixed()}°C</Heading> : null}
        </Flex>
        <Flex id="description">
          {data ? <Heading>{data.weather[0].main}</Heading> : null}{" "}
        </Flex>
        <Footer data={data} />
      </Container>
    </Flex>
  );
}

export default App;
