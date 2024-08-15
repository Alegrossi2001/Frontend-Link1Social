import { Grid, Typography } from "@mui/material";
import L1NumberBox from "../../Styled/L1Numberbox";
import React from "react";
import AvatarDropdown from "./SocialProfilesDropDown";
import { useState } from "react";
import L1ChartBox from "../../Styled/L1ChartBox";
import L1ReusableTabs from "../../Styled/L1TabPanel";
import L1LineChart from "../../Styled/Charts/L1LineChart";

const Dashboard: React.FC = () =>{

    const [SelectedProfile, SetSelectedProfile] = useState('')

    const SelectProfile = (profileHandle:string) => {
        SetSelectedProfile(profileHandle);
    }

    const data = [1,2,3,4,5]

    const performanceData = [
        { label: 'Followers', value: 71, percentage: '7,000%' },
        { label: 'New Followers', value: 70, percentage: '7,000%'},
        { label: 'Impressions', value: 11, percentage: '267%' },
        { label: 'Clicks', value: 7, percentage: '600%'},
        { label: 'Engagement Rate', value: '5.30%', percentage: '107%' },
      ];

      const tabs = [
        {
          label: 'Overview',
          content: 
          <>
          <h1>Data</h1>
          <L1NumberBox items={performanceData}/>
          <h1>Average</h1>
          <Grid container spacing={6}>
          <Grid item xs={6}>
            <L1LineChart
            data={data}
            paintArea = {false}
            yAxisLabel="Number of Items"
            title="Items Over Days"
          />
          </Grid>
          <Grid item xs={6}>
            <L1LineChart
            data={data}
            paintArea = {false}
            yAxisLabel="Number of Items"
            title="Items Over Days"
          />
          </Grid>
        </Grid>
          </>
          ,
        },
        {
          label: 'Posts',
          content: <div>Content for Posts</div>,
        },
        {
          label: 'Answers',
          content: <div>Content for Answers</div>,
        },
      ];
      

    return(
        <div>
        <AvatarDropdown/>
        <L1ReusableTabs tabs={tabs}></L1ReusableTabs>
        
        </div>
    )
}

export default Dashboard

