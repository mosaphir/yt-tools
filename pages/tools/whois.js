import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import Layout from '../../components/Layout';

export default function HostingChecker() {
  const [domain, setDomain] = useState('');
  const [hostingDetails, setHostingDetails] = useState('');
  const [loading, setLoading] = useState(false);

  // Assuming you use an API proxy or a service
  const getHostingDetails = async () => {
    if (!domain) {
      setHostingDetails('Please enter a valid domain.');
      return;
    }

    setLoading(true);
    try {
      // Replace with an actual API call to retrieve whois data, such as an API you manage or a third-party service
      const response = await fetch(`/api/whois?domain=${domain}`);
      if (!response.ok) {
        throw new Error('Failed to retrieve hosting information.');
      }
      const data = await response.json();
      setHostingDetails(JSON.stringify(data, null, 2));
    } catch (error) {
      setHostingDetails('Unable to retrieve hosting information. ' + error.message);
    } finally {
      setLoading(false);
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
        <Button
          variant="contained"
          color="primary"
          onClick={getHostingDetails}
          sx={{ marginTop: 2 }}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Hosting Details'}
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
