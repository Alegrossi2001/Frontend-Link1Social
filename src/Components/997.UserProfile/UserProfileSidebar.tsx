import { Box, CssBaseline, AppBar, Toolbar, Typography, Grid, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

export default function UserProfileSidebar() {

    const drawerItems = [
        { text: 'Dashboard', path: '/dashboard' },
        { text: 'Connect', path: '/connect' },
        { text: 'Schedule', path: '/schedule' },
        { text: 'Create', path: '/create' },
        { text: 'Leaderboard', path: '/leaderboard' },
        { text: 'User Profile', path: '/user-profile' },
    ];

    return (
        <p>Here we need to show another bar ideally. Which currently does not work.</p>

    )
}

