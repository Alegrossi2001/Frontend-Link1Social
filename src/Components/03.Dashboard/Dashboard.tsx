
import React from "react";
import AvatarDropdown from "./SocialProfilesDropDown";
import L1ReusableTabs from "../../Styled/L1TabPanel";
import OverviewDashboard from "./OverviewDashboard";
import PostDashboard from "./PostsDashboard";

const Dashboard: React.FC = () =>{


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

