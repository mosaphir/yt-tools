import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Next.js Tools
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {children}
      </Container>
      <Box component="footer" sx={{ textAlign: 'center', py: 2, backgroundColor: '#f0f0f0' }}>
        <Typography variant="body2">&copy; 2024 Next.js Tools. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}
