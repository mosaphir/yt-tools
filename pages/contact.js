import { Typography, Box, TextField, Button, Container, Grid } from '@mui/material';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!");
  };

  return (
    <Layout>
      <Head>
        <title>Contact Us - Coding Typing Speed Test</title>
        <meta name="description" content="Contact us for any questions or feedback regarding the Coding Typing Speed Test app." />
      </Head>

      <Container>
        <Grid container spacing={3} sx={{ padding: 3 }}>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions, feedback, or issues regarding the application, feel free to reach out using the contact form below.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Your Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
