import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';
import { Refresh, Info, Description, Build } from '@mui/icons-material';
import Layout from '../../components/Layout';
import { termsTemplate, exampleUseCases } from '../../data/terms';

export default function TermsAndConditionGenerator() {
  const [company, setCompany] = useState('');
  const [terms, setTerms] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const generateTermsAndConditions = () => {
    if (!company) {
      setError(true);
      return;
    }
    setLoading(true);
    setError(false);

    try {
      const generatedTerms = termsTemplate(company);
      setTerms(generatedTerms);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
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
          error={error}
          helperText={error ? "Company name is required." : ""}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={generateTermsAndConditions} 
          sx={{ marginTop: 2 }}
          startIcon={<Description />}
          disabled={loading}
        >
          Generate Terms and Conditions
        </Button>
      </Paper>

      {/* About Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', padding: 4, marginTop: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          About This Tool
        </Typography>
        <Typography variant="body1" align="center">
          This tool helps you quickly generate Terms and Conditions for your business website. Simply enter your company name, 
          and we’ll create a professional set of terms tailored for you. This tool is perfect for small businesses and website owners.
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
                <Info color="primary" fontSize="large" />
                <Typography variant="h6" align="center">
                  Professional Terms
                </Typography>
                <Typography variant="body2" align="center">
                  Generate legally sound Terms and Conditions for your website.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Build color="primary" fontSize="large" />
                <Typography variant="h6" align="center">
                  Customizable
                </Typography>
                <Typography variant="body2" align="center">
                  Customizable company name for quick generation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Refresh color="primary" fontSize="large" />
                <Typography variant="h6" align="center">
                  Instant Refresh
                </Typography>
                <Typography variant="body2" align="center">
                  Refresh and regenerate terms at any time.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', padding: 4, marginTop: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          FAQ
        </Typography>
        <Typography variant="h6" gutterBottom>
          What are Terms and Conditions?
        </Typography>
        <Typography variant="body1">
          Terms and Conditions are a set of rules that users must agree to in order to use your website or service. 
          They protect your business by outlining what users can and cannot do.
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
          Do I need Terms and Conditions for my website?
        </Typography>
        <Typography variant="body1">
          Yes, having Terms and Conditions is essential for all websites as it outlines the usage rules for users and helps avoid legal issues.
        </Typography>
      </Box>

      {/* Terms Display Section */}
      {terms && (
        <Paper elevation={3} sx={{ padding: 4, marginTop: 6 }}>
          <Typography variant="h6" gutterBottom>
            Terms and Conditions:
          </Typography>
          <pre>{terms}</pre>
        </Paper>
      )}

      {/* Example Use Cases Section */}
      <Box sx={{ padding: 4, marginTop: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Example Use Cases
        </Typography>
        <Typography variant="body1" align="center">
          {exampleUseCases}
        </Typography>
      </Box>
    </Layout>
  );
}
