import { Grid } from "@mui/material";
import L1NumberBox from "../../Styled/L1Numberbox";
import React from "react";
import L1LineChart from "../../Styled/Charts/L1LineChart";

const OverviewDashboard: React.FC = () => {

    const data = [1,2,3,4,5]

    const performanceData = [
        { label: 'Followers', value: 71, percentage: '7,000%' },
        { label: 'New Followers', value: 70, percentage: '7,000%'},
        { label: 'Impressions', value: 11, percentage: '267%' },
        { label: 'Clicks', value: 7, percentage: '600%'},
        { label: 'Engagement Rate', value: '5.30%', percentage: '107%' },
      ];
      
    return(
        <>
          <h1>Data</h1>
          <L1NumberBox items={performanceData}/>
          <h1>Average</h1>
          <Grid container spacing={6}>
          <Grid item xs={6}>
            <L1LineChart
            data={data}
            paintArea = {false}
            title="Clicks Per Post"
            calculateAverage = {true}
          />
          </Grid>
          <Grid item xs={6}>
            <L1LineChart
            data={data}
            paintArea = {false}
            title="Engagement Per Post"
            calculateAverage = {true}
          />
          </Grid>
        </Grid>
          </>
    )
}

export default OverviewDashboard;