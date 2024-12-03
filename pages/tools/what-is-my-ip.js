import { useEffect, useState } from 'react';
import { 
  Typography, 
  Box, 
  CircularProgress, 
  Button, 
  Grid, 
  Card, 
  CardContent 
} from '@mui/material';
import { 
  Public, 
  LocationOn, 
  Refresh, 
  Info, 
  CheckCircle 
} from '@mui/icons-material';
import Layout from '../../components/Layout';

export default function WhatIsMyIP() {
  const [ipData, setIPData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  useEffect(() => {
    fetchIPDetails();
  }, []);

  return (
    <>
      <Layout>
        <Box sx={{ maxWidth: '800px', margin: '0 auto', padding: 4 }}>
          {/* Header */}
          <Typography variant="h3" align="center" gutterBottom>
            What Is My IP?
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Quickly find your public IP address and location information.
          </Typography>

          {/* IP Display Section */}
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            {loading ? (
              <CircularProgress />
            ) : error ? (
              <>
                <Typography variant="h6" color="error" gutterBottom>
                  Unable to fetch IP details. Please try again.
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

          {/* About Section */}
          <Box sx={{ backgroundColor: '#f5f5f5', padding: 4, marginTop: 6 }}>
            <Typography variant="h4" align="center" gutterBottom>
              About This Tool
            </Typography>
            <Typography variant="body1" align="center">
              This tool allows you to instantly find your public IP address and additional information like location and ISP. 
              It's useful for troubleshooting connectivity, verifying location-based access, and more.
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
                    <CheckCircle color="primary" fontSize="large" />
                    <Typography variant="h6" align="center">
                      Reliable Data
                    </Typography>
                    <Typography variant="body2" align="center">
                      Data is fetched from trusted APIs for accuracy.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* How It Works Section */}
          <Box sx={{ backgroundColor: '#f5f5f5', padding: 4, marginTop: 6 }}>
            <Typography variant="h4" align="center" gutterBottom>
              How It Works
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" align="center">
                  1. Fetch IP
                </Typography>
                <Typography variant="body2" align="center">
                  The tool queries your IP address using a trusted API.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" align="center">
                  2. Display Details
                </Typography>
                <Typography variant="body2" align="center">
                  Displays your IP address, location, and ISP details.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" align="center">
                  3. Refresh Anytime
                </Typography>
                <Typography variant="body2" align="center">
                  Easily refresh the data to ensure it’s up-to-date.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
