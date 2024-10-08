import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';

import { L1SchedulerModalForm } from './0201.AddContent/SchedulerModalForm';


export default function SchedulerAppBar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openModal, setOpenModal] = useState<boolean>(false);
    //const [scheduleDate, setScheduleDate] = useState<Date | null>(new Date());
    //const [postContent, setPostContent] = useState<string>('');

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleOpenModal = () => {
        setOpenModal(true);
        return true;
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const currentDate = new Date().toLocaleDateString();

    return (
        <AppBar position="static">
            <Toolbar>
                {/* Left Side: Current Date */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {currentDate}
                </Typography>

                {/* Right Side: Dropdown Menu and Create Post Button */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* Dropdown Menu */}
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                    </Menu>

                    {/* Create Post Button */}
                    <Button color="inherit" onClick={handleOpenModal}>
                        Draft
                    </Button>
                    <Button color="inherit" onClick={handleOpenModal}>
                        SCHEDULE
                    </Button>
                </Box>
            </Toolbar>

            {/* Modal for Creating a Post */}
            <L1SchedulerModalForm openModal={openModal} handleCloseModal={handleCloseModal} />
        </AppBar>
    );
}