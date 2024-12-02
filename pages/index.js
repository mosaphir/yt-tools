import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import Layout from '@/components/Layout';
import tools from '@/data/tools';

export default function Home() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Welcome to Next.js Tools
      </Typography>
      <Grid container spacing={3}>
        {tools.map((tool, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">{tool.name}</Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {tool.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  href={tool.link}
                >
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
