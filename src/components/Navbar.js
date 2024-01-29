// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, ThemeProvider, createTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Temayı oluştur
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{ mr: 2, display: { xs: 'block', md: 'block' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>

          {user ? (
            // Giriş yapılmışsa
            <Button color="inherit" onClick={logout}>
              Çıkış Yap
            </Button>
          ) : (
            // Giriş yapılmamışsa
            <Button color="inherit" component={Link} to="/login">
              Giriş Yap
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
        <div
          role="presentation"
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
          sx={{ width: 250 }}
        >
          <List>
              <ListItemText primary="Raporlar Ekranı" />
            <ListItem button component={Link} to="/raporlar">
              <ListItemText primary="Raporlar" />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </ThemeProvider>
  );
};

export default Navbar;
