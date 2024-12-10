import React, { useState, useEffect } from 'react';
import { FaCloudSun } from 'react-icons/fa';

interface WeatherData {
  name: string;
  weather: { description: string }[];
  main: { temp: number };
}

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=YOUR_CITY&appid=YOUR_API_KEY');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  if (!weather) {
    return <div>Cargando clima...</div>;
  }

  return (
    <div className="my-3">
      <h2><FaCloudSun /> Clima Actual</h2>
      <p>{weather.name}</p>
      <p>{weather.weather[0].description}</p>
      <p>{Math.round(weather.main.temp - 273.15)}°C</p>
    </div>
  );
};

export default Weather;