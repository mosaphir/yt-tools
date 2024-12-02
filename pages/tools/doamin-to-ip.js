import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import Layout from '../../components/Layout';

export default function DomainToIP() {
  const [domain, setDomain] = useState('');
  const [ip, setIp] = useState('');

  const getDomainIp = () => {
    fetch(`https://dns.google/resolve?name=${domain}`)
      .then((response) => response.json())
      .then((data) => {
        const ip = data.Answer?.[0]?.data || 'Not found';
        setIp(ip);
      });
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Domain to IP
      </Typography>

      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Enter Domain Name:
        </Typography>
        <TextField
          label="Domain"
          variant="outlined"
          fullWidth
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={getDomainIp}>
          Get IP
        </Button>
      </Paper>

      {ip && (
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h6" gutterBottom>
            IP Address:
          </Typography>
          <Typography>{ip}</Typography>
        </Paper>
      )}
    </Layout>
  );
}
