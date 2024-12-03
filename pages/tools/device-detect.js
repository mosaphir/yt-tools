import { useState } from 'react';
import Head from 'next/head';
import { Typography, Box, Paper, Button, Grid, Container } from '@mui/material';
import Layout from '../../components/Layout';
import { 
  browserName, 
  osName, 
  engineName, 
  mobileVendor, 
  mobileModel, 
  deviceType 
} from 'react-device-detect';

export default function WhatIsMyBrowser() {
  const [browserInfo, setBrowserInfo] = useState('');

  const getBrowserInfo = () => {
    setBrowserInfo(`
      Browser: ${browserName}
      Operating System: ${osName}
      Engine: ${engineName}
      Device Type: ${deviceType}
      Mobile Vendor: ${mobileVendor || 'N/A'}
      Mobile Model: ${mobileModel || 'N/A'}
    `);
  };

  return (
    <>
      <Head>
        <title>What Is My Browser</title>
        <meta name="description" content="Find out detailed information about your browser, operating system, and device using this tool." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom align="center" sx={{ marginY: 4 }}>
            What Is My Browser
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 4, textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>
                  Get Detailed Info
                </Typography>
                <Button variant="contained" color="primary" onClick={getBrowserInfo}>
                  Get Browser Info
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              {browserInfo && (
                <Paper elevation={3} sx={{ padding: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Browser Information:
                  </Typography>
                  <pre>{browserInfo}</pre>
                </Paper>
              )}
            </Grid>
          </Grid>

          <Box sx={{ marginY: 6 }}>
            <Typography variant="h4" gutterBottom align="center">
              About
            </Typography>
            <Typography variant="body1" align="center">
              This tool provides you with detailed insights into your browser, operating system, and device specifications.
            </Typography>
          </Box>

          <Box sx={{ marginY: 6 }}>
            <Typography variant="h4" gutterBottom align="center">
              Features
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
                  <Typography variant="h6">Browser Detection</Typography>
                  <Typography variant="body2">Detects browser name and engine.</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
                  <Typography variant="h6">OS Identification</Typography>
                  <Typography variant="body2">Identifies your operating system.</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
                  <Typography variant="h6">Device Info</Typography>
                  <Typography variant="body2">Provides device type and model.</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
                  <Typography variant="h6">Responsive Design</Typography>
                  <Typography variant="body2">Optimized for all screen sizes.</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ marginY: 6 }}>
            <Typography variant="h4" gutterBottom align="center">
              FAQ
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ padding: 3 }}>
                  <Typography variant="h6">What does this tool do?</Typography>
                  <Typography variant="body2">
                    It provides details about your browser, OS, and device.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ padding: 3 }}>
                  <Typography variant="h6">Is this information accurate?</Typography>
                  <Typography variant="body2">
                    Yes, the tool uses a reliable library to detect your device details.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Layout>
    </>
  );
}
