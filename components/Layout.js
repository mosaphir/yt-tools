import { AppBar, Toolbar, Typography, IconButton, Switch, Container, Box, Grid, Divider } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '../components/ThemeProvider';
import Link from 'next/link';

export default function Layout({ children }) {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Box sx={{ bgcolor: darkMode ? 'background.default' : 'background.paper', minHeight: '100vh' }}>
      {/* Header Section */}
      <AppBar position="static" color={darkMode ? 'primary' : 'transparent'} elevation={3}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              <Typography variant="h6" color="inherit" sx={{ fontWeight: 'bold' }}>
                Next.js Tools
              </Typography>
            </Link>
          </Typography>

          {/* Dark/Light Mode Toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={toggleDarkMode} color="inherit">
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              sx={{
                display: { xs: 'none', sm: 'block' }, // Hide switch on mobile
                ml: 2,
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content Area */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          {/* Add additional UI or components as needed */}
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>

      {/* Footer Section */}
      <Box component="footer" sx={{ textAlign: 'center', py: 4, bgcolor: darkMode ? '#121212' : '#f0f0f0' }}>
        <Divider sx={{ bgcolor: darkMode ? 'text.secondary' : 'text.primary', mb: 2 }} />
        <Typography variant="body2" color={darkMode ? 'text.secondary' : 'text.primary'}>
          &copy; 2024 Next.js Tools. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Link href="/about" passHref>
            <Typography sx={{ marginX: 2, color: darkMode ? 'text.secondary' : 'text.primary' }} variant="body2">
              About
            </Typography>
          </Link>
          <Link href="/contact" passHref>
            <Typography sx={{ marginX: 2, color: darkMode ? 'text.secondary' : 'text.primary' }} variant="body2">
              Contact
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
