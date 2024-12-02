import { useState } from 'react';
import { Grid, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import Layout from '../components/Layout';
import tools from '../data/tools';

export default function Home() {
  const [search, setSearch] = useState('');

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
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
