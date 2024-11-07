import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Box, Typography, useTheme } from '@mui/material';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Tooltip, Legend, ArcElement);

const AverageRating = () => {
    const theme = useTheme();

    const data = {
        labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
        datasets: [
            {
                data: [30, 32, 8, 16, 14], // Percentages corresponding to the labels
                backgroundColor: [
                    theme.palette.primary.main, // Blue
                    theme.palette.success.main, // Green
                    theme.palette.warning.main, // Yellow
                    theme.palette.error.main, // Red
                    theme.palette.grey[400], // Gray
                ],
                hoverBackgroundColor: [
                    theme.palette.primary.dark,
                    theme.palette.success.dark,
                    theme.palette.warning.dark,
                    theme.palette.error.dark,
                    theme.palette.grey[600],
                ],
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        responsive: true,
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Box sx={{ position: 'relative', width: '250px', height: '250px' }}>
                <Pie data={data} options={options} />
            </Box>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Typography variant="h4">4.83</Typography>
                <Typography variant="subtitle1">4.1k Reviews</Typography>
            </Box>
        </Box>
    );
};

export default AverageRating;