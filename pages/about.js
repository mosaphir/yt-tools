import { Typography, Box, Container, Grid } from '@mui/material';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="description" content="Learn more about the Coding Typing Speed Test application." />
      </Head>

      <Container>
        <Grid container spacing={3} sx={{ padding: 3 }}>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              About the Coding Typing Speed Test
            </Typography>
            <Typography variant="body1" paragraph>
              This application allows users to test their coding typing speed and accuracy in various programming languages. Whether you're a beginner or a pro, challenge yourself to type code faster and more accurately. Choose from multiple languages, track your progress, and improve your skills over time.
            </Typography>
            <Typography variant="body1" paragraph>
              We provide a simple and effective way to test and improve your coding skills. Our tool supports various programming languages like JavaScript, Python, Java, C, and more, and lets you measure your speed in words per minute (WPM) and accuracy percentage.
            </Typography>
            <Typography variant="body1" paragraph>
              Happy coding!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
