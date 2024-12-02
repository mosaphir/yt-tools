import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import Layout from '../../components/Layout';
import whois from 'whois-json';

export default function HostingChecker() {
  const [domain, setDomain] = useState('');
  const [hostingDetails, setHostingDetails] = useState('');

  const getHostingDetails = async () => {
    try {
      const data = await whois(domain);
      setHostingDetails(JSON.stringify(data, null, 2));
    } catch (error) {
      setHostingDetails('Unable to retrieve hosting information.');
    }
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Hosting Checker
      </Typography>

      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Enter Domain:
        </Typography>
        <TextField
          label="Domain"
          variant="outlined"
          fullWidth
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={getHostingDetails}>
          Get Hosting Details
        </Button>
      </Paper>

      {hostingDetails && (
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h6" gutterBottom>
            Hosting Information:
          </Typography>
          <pre>{hostingDetails}</pre>
        </Paper>
      )}
    </Layout>
  );
}
