import { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Typography,
  Box,
  CircularProgress,
  Button,
  Grid,
  Card,
  CardContent,
  Tooltip,
  IconButton,
} from '@mui/material';
import {
  Public,
  LocationOn,
  Refresh,
  Info,
  CheckCircle,
  CopyAll,
  Devices,
} from '@mui/icons-material';
import Layout from '../../components/Layout';

export default function WhatIsMyIP() {
  const [ipData, setIPData] = useState({});
  const [browserData, setBrowserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch IP and Location Details
  const fetchIPDetails = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      setIPData(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Get Browser Details
  const fetchBrowserDetails = () => {
    setBrowserData({
      browser: navigator.userAgent,
      platform: navigator.platform,
    });
  };

  // Copy IP to Clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(ipData.ip || 'N/A');
    alert('IP Address copied to clipboard!');
  };

  useEffect(() => {
    fetchIPDetails();
    fetchBrowserDetails();
  }, []);

  return (
    <>
      <Head>
        <title>What Is My IP? | IP Address and Location Finder</title>
        <meta
          name="description"
          content="Discover your public IP address, location details, and browser information with our simple and reliable tool."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="What Is My IP? | IP Address and Location Finder" />
        <meta property="og:description" content="Find your public IP address, location details, and browser info easily." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/what-is-my-ip" />
        <meta property="og:image" content="https://yourwebsite.com/ip-tool-banner.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "What Is My IP?",
              description:
                "Discover your public IP address, location details, and browser information with our simple and reliable tool.",
              url: "https://yourwebsite.com/what-is-my-ip",
            }),
          }}
        />
      </Head>

      <Layout>
        <Box sx={{ maxWidth: '800px', margin: '0 auto', padding: 4 }}>
          {/* Header */}
          <Typography variant="h3" align="center" gutterBottom>
            What Is My IP?
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Quickly find your public IP address, location, and browser details.
          </Typography>

          {/* IP Display Section */}
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            {loading ? (
              <CircularProgress />
            ) : error ? (
              <>
                <Typography variant="h6" color="error" gutterBottom>
                  Unable to fetch IP details. Please check your internet connection and try again.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={fetchIPDetails}
                  startIcon={<Refresh />}
                >
                  Retry
                </Button>
              </>
            ) : (
              <>
                <Typography variant="h4" gutterBottom>
                  Your IP: {ipData.ip || 'N/A'}
                </Typography>
                <Tooltip title="Copy to Clipboard">
                  <IconButton onClick={copyToClipboard}>
                    <CopyAll />
                  </IconButton>
                </Tooltip>
                <Typography variant="h6" gutterBottom>
                  Location: {ipData.city || 'N/A'}, {ipData.region || 'N/A'}, {ipData.country_name || 'N/A'}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ISP: {ipData.org || 'N/A'}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={fetchIPDetails}
                  startIcon={<Refresh />}
                  sx={{ mt: 2 }}
                >
                  Refresh
                </Button>
              </>
            )}
          </Box>

          {/* Browser Details Section */}
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Card>
              <CardContent>
                <Devices color="primary" fontSize="large" />
                <Typography variant="h6" gutterBottom>
                  Browser & OS Details
                </Typography>
                <Typography variant="body2">
                  Browser: {browserData.browser || 'N/A'}
                </Typography>
                <Typography variant="body2">
                  Platform: {browserData.platform || 'N/A'}
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* About Section */}
          <Box sx={{ backgroundColor: '#f5f5f5', padding: 4, marginTop: 6 }}>
            <Typography variant="h4" align="center" gutterBottom>
              About This Tool
            </Typography>
            <Typography variant="body1" align="center">
              This tool allows you to instantly find your public IP address and additional information
              like location and browser details. It's perfect for network troubleshooting and
              verifying location-based access.
            </Typography>
          </Box>

          {/* Features Section */}
          <Box sx={{ padding: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Features
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Public color="primary" fontSize="large" />
                    <Typography variant="h6" align="center">
                      Public IP
                    </Typography>
                    <Typography variant="body2" align="center">
                      Instantly fetch your public IP address.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <LocationOn color="primary" fontSize="large" />
                    <Typography variant="h6" align="center">
                      Location Info
                    </Typography>
                    <Typography variant="body2" align="center">
                      View details like city, region, and country.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Devices color="primary" fontSize="large" />
                    <Typography variant="h6" align="center">
                      Browser Info
                    </Typography>
                    <Typography variant="body2" align="center">
                      See your browser and platform details.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
