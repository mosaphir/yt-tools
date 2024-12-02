import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import Layout from '../../components/Layout';

export default function DisclaimerGenerator() {
  const [company, setCompany] = useState('');
  const [disclaimer, setDisclaimer] = useState('');

  const generateDisclaimer = () => {
    const generatedDisclaimer = `
      Disclaimer for ${company}

      The information provided by Your Company ("we", "us", or "our") on yourwebsite.com is for general informational purposes only.
      All information on the Site is provided in good faith, however, we make no representations or warranties of any kind,
      express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information
      on the Site.
    `;
    setDisclaimer(generatedDisclaimer);
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Disclaimer Generator
      </Typography>

      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <TextField
          label="Enter Company Name"
          variant="outlined"
          fullWidth
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={generateDisclaimer}>
          Generate Disclaimer
        </Button>
      </Paper>

      {disclaimer && (
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h6" gutterBottom>
            Disclaimer:
          </Typography>
          <pre>{disclaimer}</pre>
        </Paper>
      )}
    </Layout>
  );
}
