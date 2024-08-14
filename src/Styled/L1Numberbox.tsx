import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

interface PerformanceItem {
  label: string;
  value: number | string;
  percentage?: string;
  imgSrc?: string; // Optional image source
}

interface PerformanceBoxProps {
  items: PerformanceItem[];
}

const L1NumberBox: React.FC<PerformanceBoxProps> = ({ items }) => {
    return (
        <Box
          sx={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            maxWidth: '100%',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Grid container spacing={2} justifyContent="space-around">
            {items.map((item, index) => (
              <Grid item key={index} xs={12} sm={4} md={2}>
                <Box textAlign="center">
                  {item.imgSrc && (
                    <img
                      src={item.imgSrc}
                      alt={item.label}
                      style={{ width: '24px', height: '24px', marginBottom: '8px' }}
                    />
                  )}
                  <Typography variant="h6">{item.value}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.label}
                  </Typography>
                  {item.percentage && (
                    <Typography variant="body2" color="green">
                      {item.percentage}
                    </Typography>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    };



export default L1NumberBox;