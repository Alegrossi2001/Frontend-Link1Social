import React, { useMemo, Suspense } from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, Grid, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import UserProfileAvatar from './AvatarTopbar';
import { RouterMain } from '../00.RouterMain/RouterMain';


const drawerWidth = 240;

const Sidebar: React.FC = React.memo(() => {

  const drawerItems = useMemo(() => ['Dashboard', 'Connect', 'Schedule', 'Create', "Leaderboard-test", "User-profile"], []);

  const appBarStyles = useMemo(() => ({
    zIndex: (theme: { zIndex: { drawer: number; }; }) => theme.zIndex.drawer + 1,
    paddingX: 2,
  }), []);

  const drawerStyles = useMemo(() => ({
    width: drawerWidth,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
  }), []);

  const mainBoxStyles = useMemo(() => ({
    flexGrow: 1,
    p: 3,
  }), []);


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" sx={appBarStyles}>
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={4}>
              <Typography variant="h6" noWrap>
                Link1 Social
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'center' }}>
              <Typography variant="h6" noWrap>
                <b>Alex Grossi's App</b>
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'right' }}>
              <UserProfileAvatar />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={drawerStyles}
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

      {/* Main Content Area with Suspense for lazy loading */}
      <Box component="main" sx={mainBoxStyles}>
        <Toolbar />
        <Suspense fallback={<div>Loading...</div>}>
          <RouterMain />
        </Suspense>
      </Box>
    </Box>
  );
});

export default Sidebar;
