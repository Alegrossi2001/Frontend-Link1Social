import { Grid, Typography } from "@mui/material";
import L1NumberBox from "../../Styled/L1Numberbox";
import Link1Linechart from "../../Styled/Linechart";
import AvatarDropdown from "./SocialProfilesDropDown";
import { useState } from "react";
import L1ChartBox from "../../Styled/L1ChartBox";

  export default function Dashboard(){

    const [SelectedProfile, SetSelectedProfile] = useState('')

    const SelectProfile = (profileHandle:string) => {
        SetSelectedProfile(profileHandle);
    }

    const performanceData = [
        { label: 'Followers', value: 71, percentage: '7,000%' },
        { label: 'New Followers', value: 70, percentage: '7,000%'},
        { label: 'Impressions', value: 11, percentage: '267%' },
        { label: 'Clicks', value: 7, percentage: '600%'},
        { label: 'Engagement Rate', value: '5.30%', percentage: '107%' },
      ];

      const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Average Impressions Per Post',
            data: [11, 15, 8, 12, 10, 14],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      };
      
      const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Average Clicks Per Post',
            data: [7, 6, 9, 5, 7, 8],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
          },
        ],
      };
      
      const pieData = {
        labels: ['Clicks', 'Impressions', 'Engagement'],
        datasets: [
          {
            label: 'Average Engagement Rate Per Post',
            data: [7, 11, 5.3],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      };
      

    return(
        <div>
        <AvatarDropdown/>
        <Link1Linechart></Link1Linechart>
        <h2>The numbers</h2>
        <L1NumberBox items={performanceData}/>
        
        </div>
    )
}

