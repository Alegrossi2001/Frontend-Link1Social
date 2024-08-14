import React, { useState } from 'react';
import { Select, MenuItem, ListItemIcon, ListItemText, Avatar, FormControl, InputLabel, Box } from '@mui/material';

const AvatarDropdown = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event:any) => {
    setSelectedValue(event.target.value);
  };

  const options = [
    { value: '', label: 'Select an option', icon: '' }, // Default option
    { value: 'option1', label: 'Option 1', icon: 'https://via.placeholder.com/40' },
    { value: 'option2', label: 'Option 2', icon: 'https://via.placeholder.com/40' },
    { value: 'option3', label: 'Option 3', icon: 'https://via.placeholder.com/40' },
  ];

  return (
    <FormControl fullWidth>
      <InputLabel id="avatar-dropdown-label">Select an option</InputLabel>
      <Select
        labelId="avatar-dropdown-label"
        value={selectedValue}
        onChange={handleChange}
        label="Select an option"
        renderValue={(selected) => {
          const selectedOption = options.find(option => option.value === selected);
          return selectedOption && selectedOption.value !== '' ? (
            <Box display="flex" alignItems="center">
              <Avatar
                src={selectedOption.icon}
                alt={selectedOption.label}
                sx={{ width: 24, height: 24, marginRight: 1 }}
              />
              <span>{selectedOption.label}</span>
            </Box>
          ) : (
            <span>Select an option</span>
          );
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.icon && (
              <ListItemIcon>
                <Avatar src={option.icon} alt={option.label} />
              </ListItemIcon>
            )}
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AvatarDropdown;
