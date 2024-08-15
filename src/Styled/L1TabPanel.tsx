import React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


/* DOCUMENTATION
  Automatically creates a tab section with as many items as possible.
  Currently used in the dashboard, but can be used anywhere.
*/

function L1TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

interface ReusableTabsProps {
  tabs: { label: string, content: React.ReactNode }[];
}

const L1ReusableTabs: React.FC<ReusableTabsProps> = ({ tabs }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="tabs example">
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} {...a11yProps(index)} />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <L1TabPanel key={index} value={value} index={index}>
          {tab.content}
        </L1TabPanel>
      ))}
    </Box>
  );
};

export default L1ReusableTabs;
