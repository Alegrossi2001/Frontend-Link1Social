import { LineChart } from '@mui/x-charts/LineChart';


/* DOCUMENTATION
  TO DO: A component that automatically creates a linechart anywhere with minimal information gathered from the API
*/
export default function Link1Linechart(){
    return(
        <LineChart
  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
  series={[
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
      area: true,
    },
  ]}
  width={500}
  height={300}
/>
    )
}