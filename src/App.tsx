import React, { useState } from "react";
import axios from "axios";
import { Flex, Heading, Container, Text, Box, Input } from "@chakra-ui/react";
import { WeatherData } from "./interface/WeatherData";

/**
 * main
 * name
 * weather
 * wind
 */

function App() {
  const [data, setData] = useState<WeatherData>(null);
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=0f84025191a187ada12ace978f3ffcef`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <Flex as="main">
      <Container>
        <Input
          value={location}
          type="text"
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter location..."
        ></Input>
        <Flex>
          <Heading>Location: {data.name}</Heading>
        </Flex>
        <Flex id="temp">
          {data.main ? <Heading>{data.main.temp.toFixed()}°C</Heading> : null}
        </Flex>
        <Flex id="description">
          {data.weather ? <Heading>{data.weather[0].main}</Heading> : null}{" "}
        </Flex>
        <Flex id="feels">
          <Text>Feels like:</Text>
          {data.main ? <Text>{data.main.feels_like.toFixed()}°C</Text> : null}
        </Flex>
        <Flex id="humidity">
          <Text>Humidity:</Text>
          {data.main ? <Text>{data.main.humidity}%</Text> : null}
        </Flex>
        <Flex id="wind">
          <Text>Wind:</Text>
          {data.wind ? <Text>{data.wind.speed}km/h</Text> : null}
        </Flex>
      </Container>
    </Flex>
  );
}

export default App;
