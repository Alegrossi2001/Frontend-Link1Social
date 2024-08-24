// src/components/Calendar.tsx
import React, { useState } from 'react';
import { Grid, Paper, Typography, Dialog, DialogContent, DialogTitle, Button } from '@mui/material';
import { format, startOfWeek, addDays, startOfMonth, endOfMonth, isSameMonth, isSameDay, endOfWeek, subMonths, addMonths } from 'date-fns';

interface Post {
    id: number;
    date: Date;
    content: string;
    imageUrl?: string;
}

interface CalendarProps {
    posts: Post[];
}

const Calendar: React.FC<CalendarProps> = ({ posts }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    const startDate = startOfWeek(startOfMonth(currentMonth));
    const endDate = endOfWeek(endOfMonth(currentMonth));

    const handleClickOpen = (post: Post) => {
        setSelectedPost(post);
    };

    const handleClose = () => {
        setSelectedPost(null);
    };

    const handlePrevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const renderDays = () => {
        const days = [];
        const dateFormat = 'EEEE';
        let startDay = startOfWeek(new Date());

        for (let i = 0; i < 7; i++) {
            days.push(
                <Grid item xs key={i}>
                    <Typography variant="h6" align="center">
                        {format(addDays(startDay, i), dateFormat)}
                    </Typography>
                </Grid>
            );
        }
        return <Grid container>{days}</Grid>;
    };

    const renderCells = () => {
        const rows = [];
        let days = [];
        let day = startDate;

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                const cloneDay = day;
                days.push(
                    <Grid item xs key={day.toString()}>
                        <Paper
                            elevation={isSameDay(day, new Date()) ? 4 : 1}
                            style={{
                                height: '120px',
                                backgroundColor: isSameMonth(day, currentMonth) ? '#fff' : '#f5f5f5',
                                padding: '10px',
                                position: 'relative',
                            }}
                            onClick={() => {
                                const post = posts.find(p => isSameDay(p.date, cloneDay));
                                if (post) handleClickOpen(post);
                            }}
                        >
                            <Typography
                                variant="body2"
                                align="right"
                                style={{ position: 'absolute', top: 0, right: 0 }}
                            >
                                {format(day, 'd')}
                            </Typography>
                            {posts
                                .filter(post => isSameDay(post.date, cloneDay))
                                .map(post => (
                                    <div key={post.id} style={{ cursor: 'pointer' }}>
                                        {post.imageUrl && (
                                            <img
                                                src={post.imageUrl}
                                                alt={post.content}
                                                style={{ maxWidth: '100%', maxHeight: '50px', objectFit: 'cover', marginBottom: '5px' }}
                                            />
                                        )}
                                        <Typography variant="body2">{post.content}</Typography>
                                    </div>
                                ))}
                        </Paper>
                    </Grid>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <Grid container key={day.toString()}>
                    {days}
                </Grid>
            );
            days = [];
        }
        return <>{rows}</>;
    };

    return (
        <div>
            <Grid container justifyContent="space-between" alignItems="center" style={{ marginBottom: '20px' }}>
                <Button onClick={handlePrevMonth}>Previous Month</Button>
                <Typography variant="h5">{format(currentMonth, 'MMMM yyyy')}</Typography>
                <Button onClick={handleNextMonth}>Next Month</Button>
            </Grid>

            {renderDays()}
            {renderCells()}

            {selectedPost && (
                <Dialog open={!!selectedPost} onClose={handleClose}>
                    <DialogTitle>{selectedPost.content}</DialogTitle>
                    <DialogContent>
                        {selectedPost.imageUrl && (
                            <img
                                src={selectedPost.imageUrl}
                                alt={selectedPost.content}
                                style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'contain' }}
                            />
                        )}
                        <Typography variant="body1" style={{ marginTop: '10px' }}>
                            {selectedPost.content}
                        </Typography>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};

export default Calendar;
