import React, { useState } from 'react';
import { Box, MenuItem, Select, InputLabel, FormControl, Button, TextField, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';

export interface L1SchedulerModalFormProps {
    openModal: boolean;
    handleCloseModal: () => void;
}

export const L1SchedulerModalForm: React.FC<L1SchedulerModalFormProps> = ({ openModal, handleCloseModal }) => {
    const [postContent, setPostContent] = useState('');
    const [selectedUser, setSelectedUser] = useState('');
    const [scheduleDate, setScheduleDate] = useState<Date | undefined>(new Date());
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    // Handle text content change
    const handlePostContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostContent(event.target.value);
    };

    // Handle user selection change
    const handleUserChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedUser(event.target.value as string);
    };

    // Handle date change for datetime picker
    const handleDateChange = (newDate: Date | undefined) => {
        if (newDate) {
            setScheduleDate(newDate);
        } else {
            throw Error;
        }
    };

    // Handle image upload change
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedImage(event.target.files[0]);
        }
    };

    // Handle form submission
    const handleSubmit = () => {
        console.log("Post Content:", postContent);
        console.log("Scheduled Date:", scheduleDate);
        console.log("Selected User:", selectedUser);
        console.log("Selected Image:", selectedImage ? selectedImage.name : "No Image");

        handleCloseModal(); // Close the modal after submission
    };

    return (
        <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    boxShadow: 24,
                    p: 4,
                    width: '400px', // Adjust width as needed
                    maxWidth: '90%', // Make sure it scales well on different screen sizes
                }}
            >
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                    Schedule Post
                </Typography>

                {/* User Selection Dropdown */}
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="user-select-label">Select User</InputLabel>
                    <Select
                        labelId="user-select-label"
                        value={selectedUser}

                    >
                        {//onChange={handleUserChange}
                        }
                        <MenuItem value="user1">User 1</MenuItem>
                        <MenuItem value="user2">User 2</MenuItem>
                        <MenuItem value="user3">User 3</MenuItem>
                    </Select>
                </FormControl>

                {/* Post Content TextField */}
                <TextField
                    label="Post Content"
                    value={postContent}
                    onChange={handlePostContentChange}
                    multiline
                    rows={4}
                    fullWidth
                    sx={{ mb: 2 }}
                />

                {/* Image Upload */}
                <Box sx={{ mb: 2 }}>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="image-upload"
                        type="file"
                        onChange={handleImageUpload}
                    />
                    <label htmlFor="image-upload">
                        <Button component="span" fullWidth>
                            {selectedImage ? selectedImage.name : "Upload Image"}
                        </Button>
                    </label>
                </Box>

                {/* Submit Button */}
                <Button onClick={handleSubmit} sx={{ mt: 2 }} fullWidth>
                    Schedule Post
                </Button>
            </Box>
        </Modal>
    );
};
