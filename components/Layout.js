import { AppBar, Toolbar, Typography, IconButton, Switch, Container, Box, Grid, Divider, Menu, MenuItem, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '../components/ThemeProvider';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Layout({ children }) {
  const { darkMode, toggleDarkMode } = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ bgcolor: darkMode ? 'background.default' : 'background.paper', minHeight: '100vh' }}>
      {/* Header Section with Navbar */}
      <AppBar position="static" color={darkMode ? 'primary' : 'transparent'} elevation={3}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              <Typography variant="h6" color="inherit" sx={{ fontWeight: 'bold' }}>
                Next.js Tools
              </Typography>
            </Link>
          </Typography>

          {/* Navbar for Desktop */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            <Link href="/about" passHref>
              <Button color="inherit">About</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button color="inherit">Contact</Button>
            </Link>
            <Link href="/tools" passHref>
              <Button color="inherit">Tools</Button>
            </Link>
          </Box>

          {/* Hamburger Menu for Mobile */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
            <IconButton onClick={() => toggleDrawer(true)} color="inherit">
              ☰
            </IconButton>
          </Box>

          {/* Dark/Light Mode Toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={toggleDarkMode} color="inherit">
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              sx={{
                display: { xs: 'none', sm: 'block' },
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

      {/* Drawer for Mobile Navbar */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <List>
          <ListItem button onClick={() => toggleDrawer(false)}>
            <Link href="/about" passHref>
              <ListItemText primary="About" />
            </Link>
          </ListItem>
          <ListItem button onClick={() => toggleDrawer(false)}>
            <Link href="/contact" passHref>
              <ListItemText primary="Contact" />
            </Link>
          </ListItem>
          <ListItem button onClick={() => toggleDrawer(false)}>
            <Link href="/tools" passHref>
              <ListItemText primary="Tools" />
            </Link>
          </ListItem>
        </List>
      </Drawer>

      {/* Footer Section with Social Media Links */}
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

        {/* Social Media Icons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <IconButton color="inherit" sx={{ marginX: 1 }}>
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ marginX: 1 }}>
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ marginX: 1 }}>
            <GitHubIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ marginX: 1 }}>
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
