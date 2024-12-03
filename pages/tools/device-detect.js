import { useState } from 'react';
import Head from 'next/head';
import { 
  Typography, 
  Box, 
  Grid, 
  Container, 
  Button, 
  Card, 
  CardContent, 
  CardActions 
} from '@mui/material';
import { Info, Devices, BrowserUpdated, CheckCircle } from '@mui/icons-material';
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
        <Container maxWidth="lg" sx={{ marginY: 6 }}>
          {/* Header */}
          <Typography variant="h3" align="center" gutterBottom>
            What Is My Browser
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Discover everything about your browser, operating system, and device.
          </Typography>

          {/* Get Info Section */}
          <Grid container spacing={4} sx={{ marginY: 4 }}>
            <Grid item xs={12} md={6}>
              <Card elevation={4}>
                <CardContent>
                  <Typography variant="h5" align="center" gutterBottom>
                    Get Your Browser Info
                  </Typography>
                  <Typography variant="body2" align="center" sx={{ marginBottom: 2 }}>
                    Click the button below to view details about your browser and device.
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button variant="contained" color="primary" onClick={getBrowserInfo}>
                    Get Browser Info
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              {browserInfo && (
                <Card elevation={4}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Browser Information:
                    </Typography>
                    <pre style={{ whiteSpace: 'pre-wrap' }}>{browserInfo}</pre>
                  </CardContent>
                </Card>
              )}
            </Grid>
          </Grid>

          {/* About Section */}
          <Box sx={{ marginY: 6 }}>
            <Typography variant="h4" align="center" gutterBottom>
              About This Tool
            </Typography>
            <Typography variant="body1" align="center">
              This tool helps you identify your browser, operating system, and device details with ease.
            </Typography>
          </Box>

          {/* Features Section */}
          <Box sx={{ marginY: 6 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Features
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3}>
                <Card elevation={3}>
                  <CardContent>
                    <BrowserUpdated fontSize="large" color="primary" />
                    <Typography variant="h6">Browser Detection</Typography>
                    <Typography variant="body2">
                      Detects your browser name and engine accurately.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card elevation={3}>
                  <CardContent>
                    <Devices fontSize="large" color="primary" />
                    <Typography variant="h6">Device Info</Typography>
                    <Typography variant="body2">
                      Identifies your device type and model.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card elevation={3}>
                  <CardContent>
                    <Info fontSize="large" color="primary" />
                    <Typography variant="h6">OS Identification</Typography>
                    <Typography variant="body2">
                      Provides details about your operating system.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card elevation={3}>
                  <CardContent>
                    <CheckCircle fontSize="large" color="primary" />
                    <Typography variant="h6">Responsive Design</Typography>
                    <Typography variant="body2">
                      Optimized for all devices and screen sizes.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* FAQ Section */}
          <Box sx={{ marginY: 6 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Frequently Asked Questions
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card elevation={3}>
                  <CardContent>
                    <Typography variant="h6">What does this tool do?</Typography>
                    <Typography variant="body2">
                      It provides detailed insights about your browser, operating system, and device.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card elevation={3}>
                  <CardContent>
                    <Typography variant="h6">Is the information accurate?</Typography>
                    <Typography variant="body2">
                      Yes, the tool leverages reliable libraries for accurate detection.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Layout>
    </>
  );
}
