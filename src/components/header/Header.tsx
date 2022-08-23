import React, { useState } from "react";
import { Flex, Input } from "@chakra-ui/react";
import axios from "axios";
import { WeatherData } from "../../interface/WeatherData";

interface HeaderProps {
  data: WeatherData;
  setData: React.Dispatch<React.SetStateAction<WeatherData>>;
}

const Header: React.FC<HeaderProps> = ({ data, setData }) => {
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
    <Flex as="header">
      <Input
        value={location}
        type="text"
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter location..."
      />
    </Flex>
  );
};

export default Header;
