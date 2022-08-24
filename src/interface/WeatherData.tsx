import { Main } from "./Main";
import { Weather } from "./Weather";
import { Wind } from "./Wind";

export interface WeatherData {
  main: Main;
  name: string;
  weather: Weather[];
  wind: Wind;
}
