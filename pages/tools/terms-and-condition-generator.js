import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import Layout from '../../components/Layout';

export default function TermsAndConditionGenerator() {
  const [company, setCompany] = useState('');
  const [terms, setTerms] = useState('');

  const generateTermsAndConditions = () => {
    const generatedTerms = `
      Terms and Conditions for ${company}

      These terms and conditions outline the rules and regulations for the use of Your Company’s website,
      located at yourwebsite.com.

      By accessing this website, we assume you accept these terms and conditions. Do not continue to use yourwebsite.com
      if you do not agree to take all of the terms and conditions stated on this page.
    `;
    setTerms(generatedTerms);
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Terms and Condition Generator
      </Typography>

      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <TextField
          label="Enter Company Name"
          variant="outlined"
          fullWidth
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={generateTermsAndConditions}>
          Generate Terms and Conditions
        </Button>
      </Paper>

      {terms && (
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h6" gutterBottom>
            Terms and Conditions:
          </Typography>
          <pre>{terms}</pre>
        </Paper>
      )}
    </Layout>
  );
}
