import { Grid, Typography } from "@mui/material";
import L1NumberBox from "../../Styled/L1Numberbox";
import React from "react";
import AvatarDropdown from "./SocialProfilesDropDown";
import { useState } from "react";
import L1ChartBox from "../../Styled/L1ChartBox";
import L1ReusableTabs from "../../Styled/L1TabPanel";
import L1LineChart from "../../Styled/Charts/L1LineChart";
import OverviewDashboard from "./OverviewDashboard";
import PostDashboard from "./PostsDashboard";

const Dashboard: React.FC = () =>{

    const [SelectedProfile, SetSelectedProfile] = useState('')

    const SelectProfile = (profileHandle:string) => {
        SetSelectedProfile(profileHandle);
    }

      const tabs = [
        {
          label: 'Overview',
          content: 
          <OverviewDashboard></OverviewDashboard>
          ,
        },
        {
          label: 'Posts',
          content: <PostDashboard></PostDashboard>
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

