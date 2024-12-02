import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import Layout from '../../components/Layout';

export default function PrivacyPolicyGenerator() {
  const [name, setName] = useState('');
  const [privacyPolicy, setPrivacyPolicy] = useState('');

  const generatePrivacyPolicy = () => {
    const policy = `
      Privacy Policy for ${name}

      At Your Company, accessible from yourwebsite.com, one of our main priorities is the privacy of our visitors.
      This Privacy Policy document contains types of information that is collected and recorded by Your Company and how we use it.
    `;
    setPrivacyPolicy(policy);
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Privacy Policy Generator
      </Typography>

      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <TextField
          label="Enter Company Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={generatePrivacyPolicy}>
          Generate Privacy Policy
        </Button>
      </Paper>

      {privacyPolicy && (
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h6" gutterBottom>
            Privacy Policy:
          </Typography>
          <pre>{privacyPolicy}</pre>
        </Paper>
      )}
    </Layout>
  );
}
