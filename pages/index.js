import { useState } from 'react';
import { Grid, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import Layout from '../components/Layout';
import tools from '../data/tools';
import Head from 'next/head';

export default function Home() {
  const [search, setSearch] = useState('');

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      {/* SEO Meta Tags */}
      <Head>
        <title>Next.js Tools - Online Tools for Developers</title>
        <meta
          name="description"
          content="Discover a wide range of online tools for developers including MD5 generator, Base64 encoder, password generator, and more. Fast and easy to use."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Next.js Tools - Online Tools for Developers" />
        <meta
          property="og:description"
          content="Discover a wide range of online tools for developers including MD5 generator, Base64 encoder, password generator, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" /> {/* Change this to your actual site URL */}
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" /> {/* Add an image URL for better social sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Next.js Tools - Online Tools for Developers" />
        <meta
          name="twitter:description"
          content="Discover a wide range of online tools for developers including MD5 generator, Base64 encoder, password generator, and more."
        />
        <meta name="twitter:image" content="https://yourwebsite.com/og-image.jpg" />
      </Head>

      <Typography variant="h4" gutterBottom>
        Welcome to Next.js Tools
      </Typography>
      <TextField
        label="Search Tools"
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 3 }}
      />
      <Grid container spacing={3}>
        {filteredTools.map((tool, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card variant="outlined">
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {tool.icon}
                <Typography variant="h6" sx={{ mt: 1 }}>
                  {tool.name}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, textAlign: 'center' }}>
                  {tool.description}
                </Typography>
                <Button variant="contained" color="primary" fullWidth href={tool.link}>
                  Open Tool
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
