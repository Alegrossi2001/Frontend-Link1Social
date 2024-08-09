import { L1Modal, L1Typography, L1TextField, L1Button } from '../../../Styled/Link1Primitives';
import React, { useState } from 'react';

export interface L1SchedulerModalFormProps {
    openModal: boolean;
    handleCloseModal: () => void;
}

export const L1SchedulerModalForm: React.FC<L1SchedulerModalFormProps> = ({ openModal, handleCloseModal }) => {
    const [postContent, setPostContent] = useState('');

    const handlePostContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostContent(event.target.value);
    };

    const handleSubmit = () => {
        console.log("Post Content:", postContent);
        handleCloseModal(); // Close the modal after submission
    };

    return (
        <L1Modal open={openModal} handleClose={handleCloseModal}>
            <L1Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                Schedule Post
            </L1Typography>

            <L1TextField
                label="Post Content"
                value={postContent}
                onChange={handlePostContentChange}
                multiline
                rows={4}
                sx={{ mb: 2 }}
            />

            <L1Button onClick={handleSubmit} sx={{ mt: 2 }} fullWidth>
                Schedule Post
            </L1Button>
        </L1Modal>
    );
};
