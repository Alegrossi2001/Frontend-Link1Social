import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { RouterMain } from '../00.RouterMain/RouterMain';
import { Grid } from '@mui/material';

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
        <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-start">
          <Typography variant="h6" noWrap component="div">
              Link1 Social
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
          <Typography variant="h6" noWrap component="div">
              <b>Alex Grossi's App</b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-end">
          <Typography variant="h6" noWrap component="div">
              My Account
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
        </Toolbar>
      </AppBar>
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
          {['Dashboard', 'Connect', 'Schedule', 'TBD'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton href={`/${text}`}>
                {//<ListItemIcon>
                  //{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                //</ListItemIcon>
                }
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <RouterMain></RouterMain>
      </Box>
    </Box>
  );
}
