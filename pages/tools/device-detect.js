import { useEffect, useState } from 'react';
import Head from 'next/head';
import { 
  Typography, 
  Box, 
  Grid, 
  Container, 
  Card, 
  CardContent 
} from '@mui/material';
import { Info, Devices, ScreenSearchDesktop, BrowserUpdated } from '@mui/icons-material';
import Layout from '../../components/Layout';
import { 
  browserName, 
  osName, 
  engineName, 
  mobileVendor, 
  mobileModel, 
  deviceType, 
  getUA 
} from 'react-device-detect';

export default function WhatIsMyBrowser() {
  const [deviceInfo, setDeviceInfo] = useState({});

  useEffect(() => {
    // Collect device information
    setDeviceInfo({
      browser: browserName,
      operatingSystem: osName,
      engine: engineName,
      deviceType,
      mobileVendor: mobileVendor || 'N/A',
      mobileModel: mobileModel || 'N/A',
      userAgent: getUA(),
      screenResolution: `${window.screen.width} x ${window.screen.height}`,
    });
  }, []);

  return (
    <>
      <Head>
        <title>What Is My Browser</title>
        <meta 
          name="description" 
          content="Find out detailed information about your browser, operating system, and device using this tool." 
        />
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

          {/* Device Information Section */}
          <Box sx={{ marginY: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Your Device Information
            </Typography>
            <Grid container spacing={4}>
              {Object.entries(deviceInfo).map(([key, value]) => (
                <Grid item xs={12} sm={6} md={4} key={key}>
                  <Card elevation={3}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                      </Typography>
                      <Typography variant="body2">{value}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
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
                      Accurately detects your browser and rendering engine.
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
                      Provides detailed information about your device type, vendor, and model.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card elevation={3}>
                  <CardContent>
                    <ScreenSearchDesktop fontSize="large" color="primary" />
                    <Typography variant="h6">Screen Resolution</Typography>
                    <Typography variant="body2">
                      Displays your screen dimensions for responsive optimization.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card elevation={3}>
                  <CardContent>
                    <Info fontSize="large" color="primary" />
                    <Typography variant="h6">User Agent</Typography>
                    <Typography variant="body2">
                      Displays your browser's user agent string.
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
                      This tool detects and displays detailed information about your browser, operating system, and device.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card elevation={3}>
                  <CardContent>
                    <Typography variant="h6">Is the information accurate?</Typography>
                    <Typography variant="body2">
                      Yes, the tool leverages reliable libraries like `react-device-detect` for precise detection.
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
