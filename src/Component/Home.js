import axios from "axios";
import React, { useState, useEffect } from "react";
import Weather from "./Weather";
export default function Home() {
  const [weather, setWeather] = useState();
  const getWeatherData = async () => {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=istanbul&units=metric&appid=e43fcf7f8c8f81e4c687084e1b688b7e"
    );
    setWeather(data);
    console.log(data);
  };
  useEffect(() => {
    getWeatherData();
    return () => {};
  }, []);
  return <Weather weather={weather}></Weather>;
}
