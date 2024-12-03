import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper, Grid, Card, CardContent, Container, Snackbar } from '@mui/material';
import { Refresh, Info, Description, Build, FileCopy, Code } from '@mui/icons-material';
import Layout from '../../components/Layout';
import { termsTemplate, exampleUseCases } from '../../data/terms';

export default function TermsAndConditionGenerator() {
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [terms, setTerms] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');

  const generateTermsAndConditions = () => {
    if (!company || !website || !email || !phone || !date) {
      setError(true);
      return;
    }
    setLoading(true);
    setError(false);

    try {
      const generatedTerms = termsTemplate(company, website, email, phone, date);
      setTerms(generatedTerms);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (format) => {
    const textToCopy = format === 'md' ? generateMarkdown(terms) : generateHTML(terms);
    navigator.clipboard.writeText(textToCopy).then(() => {
      setSnackMessage(`${format === 'md' ? 'Markdown' : 'HTML'} copied to clipboard!`);
    }).catch((err) => {
      setSnackMessage('Failed to copy text!');
    });
  };

  const generateMarkdown = (termsText) => {
    // Simple markdown conversion
    return `# Terms and Conditions

${termsText}`;
  };

  const generateHTML = (termsText) => {
    // Simple HTML conversion
    return `<h1>Terms and Conditions</h1><p>${termsText.replace(/\n/g, '<br/>')}</p>`;
  };

  return (
    <Layout>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Terms and Condition Generator
        </Typography>

        {/* Form Section */}
        <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            error={error}
            helperText={error && "All fields are required."}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Website URL"
            variant="outlined"
            fullWidth
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            error={error}
            helperText={error && "All fields are required."}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
            helperText={error && "All fields are required."}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={error}
            helperText={error && "All fields are required."}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Date"
            type="date"
            variant="outlined"
            fullWidth
            value={date}
            onChange={(e) => setDate(e.target.value)}
            error={error}
            helperText={error && "All fields are required."}
            sx={{ marginBottom: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
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

        {/* Terms Display Section */}
        {terms && (
          <Paper elevation={3} sx={{ padding: 4, marginTop: 6 }}>
            <Typography variant="h6" gutterBottom>
              Terms and Conditions:
            </Typography>
            <pre>{terms}</pre>

            {/* Buttons for Copying Markdown or HTML */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
              <Button
                variant="outlined"
                startIcon={<FileCopy />}
                onClick={() => copyToClipboard('md')}
              >
                Copy Markdown
              </Button>
              <Button
                variant="outlined"
                startIcon={<Code />}
                onClick={() => copyToClipboard('html')}
              >
                Copy HTML
              </Button>
            </Box>
          </Paper>
        )}

        {/* Snackbar for Success Message */}
        <Snackbar
          open={snackMessage !== ''}
          autoHideDuration={3000}
          message={snackMessage}
          onClose={() => setSnackMessage('')}
        />

        {/* About Section */}
        <Box sx={{ backgroundColor: '#f5f5f5', padding: 4, marginTop: 6 }}>
          <Typography variant="h4" align="center" gutterBottom>
            About This Tool
          </Typography>
          <Typography variant="body1" align="center">
            This tool helps you quickly generate Terms and Conditions for your business website. Simply enter your company 
            details (company name, website, email, phone, and date), and we’ll create a professional set of terms tailored for you.
            This tool is perfect for small businesses and website owners.
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
                    Customizable company name and details for quick generation.
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

        {/* Example Use Cases Section */}
        <Box sx={{ padding: 4, marginTop: 6 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Example Use Cases
          </Typography>
          <Typography variant="body1" align="center">
            {exampleUseCases}
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}
