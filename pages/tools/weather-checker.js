import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import Layout from '../../components/Layout';

const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeather API key

export default function WeatherChecker() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      setWeather(null);
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Weather Checker
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Enter city"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="contained" onClick={fetchWeather}>
          Get Weather
        </Button>
        {weather && (
          <Box>
            <Typography variant="h6">{weather.name}</Typography>
            <Typography>Temperature: {weather.main.temp}°C</Typography>
            <Typography>Condition: {weather.weather[0].description}</Typography>
          </Box>
        )}
      </Box>
    </Layout>
  );
}
