import { Box, CssBaseline, AppBar, Toolbar, Typography, Grid, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import UserProfileAvatar from './AvatarTopbar';
import { RouterMain } from '../00.RouterMain/RouterMain';
import React, { Suspense, useMemo } from 'react';
const drawerWidth = 240;

export default function Sidebar() {

  const drawerItems = useMemo(() => ['Dashboard', 'Connect', 'Schedule', 'Create'], []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Adjusted AppBar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#1976d2', // Optional: Adjust the background color if needed
          paddingX: 2 // Add horizontal padding
        }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={4}>
              <Typography variant="h6" noWrap component="div">
                Link1 Social
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'center' }}>
              <Typography variant="h6" noWrap component="div">
                <b>Alex Grossi's App</b>
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'right' }}>
              <UserProfileAvatar />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* Adjusted Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {drawerItems.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton href={`/${text}`}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Suspense fallback={<div>Loading...</div>}>
          <RouterMain></RouterMain>
        </Suspense>
      </Box>
    </Box>
  );
}
