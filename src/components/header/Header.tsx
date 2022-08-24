import React, { useState } from "react";
import { Flex, Input } from "@chakra-ui/react";
import axios from "axios";
import { WeatherData } from "../../interface/WeatherData";

//teste

interface HeaderProps {
  data: WeatherData;
  setData: React.Dispatch<React.SetStateAction<WeatherData>>;
}

const Header: React.FC<HeaderProps> = ({ data, setData }) => {
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

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
    <Flex as="header" width="100%">
      <Input
        value={location}
        type="text"
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter location..."
        _placeholder={{ color: "gray.900" }}
        borderColor="black"
        bgColor="rgba(255,255,255, 0.2)"
      />
    </Flex>
  );
};

export default Header;
