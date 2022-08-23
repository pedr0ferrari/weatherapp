import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { WeatherData } from "../../interface/WeatherData";

interface FooterProps {
  data: WeatherData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <Container as="footer">
      <Flex id="feels">
        <Text>Feels like:</Text>
        {data ? <Text>{data.main.feels_like.toFixed()}°C</Text> : null}
      </Flex>
      <Flex id="humidity">
        <Text>Humidity:</Text>
        {data ? <Text>{data.main.humidity}%</Text> : null}
      </Flex>
      <Flex id="wind">
        <Text>Wind:</Text>
        {data ? <Text>{data.wind.speed}km/h</Text> : null}
      </Flex>
    </Container>
  );
};

export default Footer;
