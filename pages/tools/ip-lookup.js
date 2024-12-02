import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import Layout from '../../components/Layout';

export default function IPLookup() {
  const [ip, setIP] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const lookupIP = async () => {
    setError('');
    setData(null);
    try {
      const response = await fetch(`https://ipinfo.io/${ip}/json?token=b4ee7887bee0db`);
      const result = await response.json();
      if (result.error) {
        setError(result.error.message);
      } else {
        setData(result);
      }
    } catch (e) {
      setError('Failed to fetch IP details');
    }
  };

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        IP Address Lookup
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Enter IP Address"
          variant="outlined"
          fullWidth
          value={ip}
          onChange={(e) => setIP(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={lookupIP}>
          Lookup IP
        </Button>
        {error && <Typography color="error">{error}</Typography>}
        {data && (
          <Box sx={{ mt: 2 }}>
            <Typography>Location: {data.city}, {data.region}, {data.country}</Typography>
            <Typography>Organization: {data.org}</Typography>
            <Typography>Coordinates: {data.loc}</Typography>
          </Box>
        )}
      </Box>
    </Layout>
  );
}
