import { AppBar, Toolbar, Typography, IconButton, Switch, Container, Box } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '../components/ThemeProvider';
import Link from 'next/link';

export default function Layout({ children }) {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Next.js Tools
            </Link>
          </Typography>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
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
