// InfiniteScrollPanel.tsx
import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, List, ListItem, Typography } from '@mui/material';

const L1InfiniteScrollPanel: React.FC = () => {
    const [items, setItems] = useState<number[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        // Load initial items
        loadMoreItems();
    }, []);

    const loadMoreItems = () => {
        setLoading(true);
        setTimeout(() => {
            const newItems = Array.from({ length: 10 }, (_, i) => items.length + i + 1);
            setItems((prevItems) => [...prevItems, ...newItems]);
            setLoading(false);
        }, 1000);
    };

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight;
        if (bottom && !loading) {
            loadMoreItems();
        }
    };

    return (
        <Box
            sx={{
                height: '400px',
                overflowY: 'auto',
                mt: 2,
                border: '1px solid #ddd',
            }}
            onScroll={handleScroll}
        >
            <List>
                {items.map((item) => (
                    <ListItem key={item}>
                        <Typography>Item {item}</Typography>
                    </ListItem>
                ))}
            </List>
            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                    <CircularProgress />
                </Box>
            )}
        </Box>
    );
};

export default L1InfiniteScrollPanel;
