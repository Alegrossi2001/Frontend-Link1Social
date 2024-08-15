import React from 'react';
import { Button } from '@mui/material';
import { Modal, Box } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';

/* DOCUMENTATION
  Primitives. Can be removed as soon as possible since we are transitioning to fully reusable components anywhere in the project
*/

interface L1Button {
    OnClickAction: () => unknown
}

interface L1ModalProps {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
    style?: object; // Optional custom styles
}

export const L1Modal: React.FC<L1ModalProps> = ({ open, handleClose, children, style }) => {
    const defaultStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
        ...style, // Merges custom styles with the default styles
    };

    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={defaultStyle}>
                {children}
            </Box>
        </Modal>
    );
};


interface L1TypographyProps {
    id: string;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    component: React.ElementType;
    children: React.ReactNode;
    sx?: object;
}

export const L1Typography: React.FC<L1TypographyProps> = ({ id, variant, component, children, sx }) => {
    return (
        <Typography id={id} variant={variant} component={component} sx={sx}>
            {children}
        </Typography>
    );
};

interface L1TextFieldProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    multiline?: boolean;
    rows?: number;
    sx?: object;
}

export const L1TextField: React.FC<L1TextFieldProps> = ({ label, value, onChange, multiline = false, rows = 1, sx }) => {
    return (
        <TextField
            fullWidth
            label={label}
            variant="outlined"
            multiline={multiline}
            rows={rows}
            value={value}
            onChange={onChange}
            sx={sx}
        />
    );
};


interface L1ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    variant?: 'text' | 'outlined' | 'contained';
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    sx?: object;
    fullWidth?: boolean;
}

export const L1Button: React.FC<L1ButtonProps> = ({ children, onClick, variant = 'contained', color = 'primary', sx, fullWidth = false }) => {
    return (
        <Button variant={variant} color={color} onClick={onClick} sx={sx} fullWidth={fullWidth}>
            {children}
        </Button>
    );
};