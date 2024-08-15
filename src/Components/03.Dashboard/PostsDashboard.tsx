import L1NumberBox from "../../Styled/L1Numberbox";
import React from "react";
import { ColumnConfig } from "../../Styled/Tables/TableProps";
import { Box, Button } from '@mui/material';
import { L1DynamicTable } from "../../Styled/Tables/L1DynamicTable";


type HashtagData = {
  Rank: number;
  name: string;
  Posts: number;
  AverageImpressions: number;
  AvgEngagementRate: number;
};

const PostDashboard: React.FC = () => {

    const PostData = [
        { label: 'Posts', value: 71, percentage: '7,000%' },
        { label: 'Impressions', value: 70, percentage: '7,000%'},
        { label: 'Likes', value: 11, percentage: '267%' },
        { label: 'Comments', value: 7, percentage: '600%'},
        { label: 'Shares', value: '5.30%', percentage: '107%' },
        { label: 'Clicks', value: '5.30%', percentage: '107%' },
        { label: 'Engagement Rate', value: '5.30%', percentage: '107%' },
      ];

      const users: HashtagData[] = [
        { Rank:1, name:"#Diocane", Posts:3, AverageImpressions:5, AvgEngagementRate:6},
        { Rank:2, name:"#DioPorco", Posts:5, AverageImpressions:1, AvgEngagementRate:0},
        { Rank:3, name:"#DioBastardo", Posts:7, AverageImpressions:0, AvgEngagementRate:0},
      ];
      
      const columns: ColumnConfig<HashtagData>[] = [
        { id: 'Rank', label: 'Rank' },
        { id: 'name', label: 'Name', align: 'left' },
        {
          id: 'Posts',
          label: 'Posts',
          render: (value) => <a href={`mailto:${value}`}>{value}</a>,
        },
        { id: 'AverageImpressions', label: 'Average Impressions', align: 'right' },
        { id: 'AvgEngagementRate', label: 'AvgEngagementRate', align: 'right' },
      ];

      const handleRowClick = (row: HashtagData) => {
        console.log('Row clicked:', row);
      };
    
      const renderActions = (row: HashtagData) => (
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.stopPropagation();
            alert(`User ID: ${row.Rank}`);
          }}
        >
          Details
        </Button>
      );
      
    return(
        <>
          <h1>Posts Overview</h1>
          <L1NumberBox items={PostData}/>
          <h1>Hashtag Data</h1>
          <Box>
            <L1DynamicTable
              columns={columns}
              data={users}
              keyExtractor={(row) => row.Rank}
              onRowClick={handleRowClick}
              actions={renderActions}
              />
          </Box>
          </>
    )
}

export default PostDashboard;