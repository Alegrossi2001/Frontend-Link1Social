import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

type LineChartProps = {
  data: number[],
  paintArea:boolean,
  yAxisLabel?: string;
  title?: string;
};

const L1LineChart: React.FC<LineChartProps> = ({ data, paintArea = false, yAxisLabel = 'Values', title = 'Bar Chart' }) => {

  return (
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
  );
};

export default L1LineChart;


