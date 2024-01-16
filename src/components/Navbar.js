// src/components/Navbar.js
import React, { useState, useRef } from 'react';

import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, ThemeProvider, createTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const iconButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  // Temayı oluştur
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
  ref={iconButtonRef}
  size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  onClick={toggleMenu}
  sx={{ mr: 2, display: { xs: 'block', md: 'block' } }}
>
<MenuIcon />
</IconButton>

<Menu
  id="menu"
  anchorEl={iconButtonRef.current}
  open={isMenuOpen}
  onClose={handleMenuClose}
  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
>
            <MenuItem component={Link} to="/ChartPage" onClick={handleMenuClose}>
              Raporlar Ekranı
            </MenuItem>
            <MenuItem component={Link} to="/raporlar" onClick={handleMenuClose}>
              Raporlar
            </MenuItem>

            <MenuItem>
              {user ? (
                <Button color="inherit" onClick={logout}>
                  Çıkış Yap
                </Button>
              ) : (
                <Button color="inherit" component={Link} to="/login">
                  Giriş Yap
                </Button>
              )}
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
