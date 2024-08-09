import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Modal, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { L1SchedulerModalForm } from './0201.AddContent/SchedulerModalForm';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function SchedulerAppBar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [scheduleDate, setScheduleDate] = useState<Date | null>(new Date());
    const [postContent, setPostContent] = useState<string>('');

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

    const handleScheduleDateChange = (newDate: Date | null) => {
        setScheduleDate(newDate);
    };

    const handlePostContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostContent(event.target.value);
    };

    const handleSubmit = () => {
        // Handle post submission logic here
        console.log('Scheduled Post:', {
            postContent,
            scheduleDate,
        });
        handleCloseModal(); // Close the modal after submission
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
            <L1SchedulerModalForm openModal={openModal} handleCloseModal={handleCloseModal}/>
        </AppBar>
    );
}