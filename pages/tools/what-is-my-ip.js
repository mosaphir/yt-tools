import { useEffect, useState } from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';
import Layout from '../../components/Layout';

export default function WhatIsMyIP() {
  const [ip, setIP] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIP(data.ip);
      } catch (error) {
        setIP('Unable to fetch IP');
      } finally {
        setLoading(false);
      }
    };
    fetchIP();
  }, []);

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        What Is My IP
      </Typography>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        {loading ? <CircularProgress /> : <Typography variant="h6">Your IP: {ip}</Typography>}
      </Box>
    </Layout>
  );
}
