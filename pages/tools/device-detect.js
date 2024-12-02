import { useState } from 'react';
import { Typography, Box, Paper, Button } from '@mui/material';
import Layout from '../../components/Layout';
import { browserName, osName } from 'react-device-detect';

export default function WhatIsMyBrowser() {
  const [browserInfo, setBrowserInfo] = useState('');

  const getBrowserInfo = () => {
    setBrowserInfo(`Browser: ${browserName}\nOperating System: ${osName}`);
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        What Is My Browser
      </Typography>

      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Button variant="contained" color="primary" onClick={getBrowserInfo}>
          Get Browser Info
        </Button>
      </Paper>

      {browserInfo && (
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h6" gutterBottom>
            Browser Information:
          </Typography>
          <pre>{browserInfo}</pre>
        </Paper>
      )}
    </Layout>
  );
}
