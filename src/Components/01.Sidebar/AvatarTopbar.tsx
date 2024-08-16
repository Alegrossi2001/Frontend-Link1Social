import React, { useState, MouseEvent } from 'react';
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';

const UserProfileAvatar: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfile = () => {
        // Handle the "My Profile" action here
        console.log('My Profile clicked');
        handleClose();
    };

    const handleLogout = () => {
        // Handle the "Logout" action here
        console.log('Logout clicked');
        handleClose();
    };

    return (
        <>
            <IconButton onClick={handleClick} size="large">
                <Avatar alt="User Avatar" src="/path-to-avatar-image.jpg" />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleProfile}>My Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default UserProfileAvatar;
