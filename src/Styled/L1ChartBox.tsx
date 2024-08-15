import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string;
    borderWidth?: number;
  }[];
}

interface ChartBoxProps {
  title: string;
  data: ChartData;
  chartType: 'bar' | 'line' | 'pie';
}

/* DOCUMENTATION
  A box to hold various charts, created through an object.
  Currently does not work, needs to be redone
*/
const L1ChartBox: React.FC<ChartBoxProps> = ({ title, data, chartType }) => {
  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <Bar data={data} />;
      case 'line':
        return <Line data={data} />;
      case 'pie':
        return <Pie data={data} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', maxWidth: '100%' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {renderChart()}
    </Box>
  );
};

export default L1ChartBox;
