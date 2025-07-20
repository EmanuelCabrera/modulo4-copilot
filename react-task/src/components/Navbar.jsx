
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Avatar, IconButton } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static" color="default" elevation={0} sx={{ bgcolor: '#f8fafc', color: '#222', borderRadius: 2, boxShadow: 'none', mb: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          TaskMaster
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button color="inherit" disableRipple sx={{ textTransform: 'uppercase', fontWeight: 600, fontSize: '1rem', letterSpacing: 1, '&:focus': { outline: 'none' }, '&:active': { background: 'transparent' } }}>Dashboard</Button>
          <Button color="inherit" disableRipple sx={{ textTransform: 'uppercase', fontWeight: 600, fontSize: '1rem', letterSpacing: 1, '&:focus': { outline: 'none' }, '&:active': { background: 'transparent' } }}>Projects</Button>
          <Button color="inherit" disableRipple sx={{ textTransform: 'uppercase', fontWeight: 600, fontSize: '1rem', letterSpacing: 1, '&:focus': { outline: 'none' }, '&:active': { background: 'transparent' } }}>Team</Button>
          <Button color="inherit" disableRipple sx={{ textTransform: 'uppercase', fontWeight: 600, fontSize: '1rem', letterSpacing: 1, '&:focus': { outline: 'none' }, '&:active': { background: 'transparent' } }}>Reports</Button>
          <IconButton>
            <Avatar alt="User" src="https://randomuser.me/api/portraits/women/44.jpg" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
