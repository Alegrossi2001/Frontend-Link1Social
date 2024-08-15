import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Typography } from '@mui/material';

type LineChartProps = {
  data: number[],
  paintArea:boolean,
  title: string;
  calculateAverage:boolean,
};

const L1LineChart: React.FC<LineChartProps> = ({ data, paintArea = false, title = 'Values', calculateAverage = true }) => {
  const average = calculateAverage ? data.reduce((a, b) => a + b, 0) / data.length : null;

  return (
    <Box>

      <LineChart
        series={[
          {
            data: data,
            area: paintArea,
          },
        ]}
        width={500}
        height={300}
      />

      <Typography variant="h6">{title}</Typography>

      {calculateAverage && average !== null && (
        <Typography variant="h4" align="left">
          {Math.round(average)} {/* Rounds the average to nearest whole number */}
        </Typography>
      )}
    </Box>
  );
};

export default L1LineChart;