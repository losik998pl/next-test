'use client'

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import classNames from 'classnames';

import fileStyles from './TabPanel.module.scss'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TabsProps {
  className?: string;
  tabs: string[];
}

// export default function TabPanel({ tabs, styles }: TabsProps) {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box>
//         <Tabs value={value} onChange={handleChange} className={fileStyles.tabs} centered>
//           {tabs.map((tabName, index) => (<Tab className={fileStyles.tab} label={tabName} key={tabName} {...a11yProps(index)} />))}
//         </Tabs>
//       </Box>
//     </Box>
//   );
// }

export function NewTabPanel({ tabs, className = '' }: TabsProps) {
  const [value, setValue] = React.useState(0);

  return (
    // <Box className={`${fileStyles.tabPanel} ${className}`}>
    <Box className={classNames(fileStyles.tabPanel, className)}>
      {tabs.map((tabName, index) => (
        <Button
          variant='text'
          className={value === index ? fileStyles.active : fileStyles.inactive}
          key={tabName}
          onClick={() => setValue(index)}
        >
          {tabName}
        </Button>
      ))}
    </Box>
  );
}
