import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { WeatherData } from "../../interface/WeatherData";

interface FooterProps {
  data: WeatherData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <Flex
      as="footer"
      justifyContent="space-evenly"
      align="center"
      marginTop="auto"
      marginBottom="10"
      minH="12vh"
      width="100%"
      borderRadius="15px"
      bgColor="rgba(255,255,255, 0.4)"
    >
      <Flex direction="column" align="center">
        <Text>Feels like:</Text>
        {data ? <Text>{data.main.feels_like.toFixed()}°C</Text> : null}
      </Flex>
      <Flex direction="column" align="center">
        <Text>Humidity: </Text>
        {data ? <Text>{data.main.humidity}%</Text> : null}
      </Flex>
      <Flex direction="column" align="center">
        <Text>Wind:</Text>
        {data ? <Text>{data.wind.speed}km/h</Text> : null}
      </Flex>
    </Flex>
  );
};

export default Footer;
