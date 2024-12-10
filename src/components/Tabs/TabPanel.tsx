import React from 'react';

interface TabPanelProps {
  label: string;
  children: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ children }) => <div>{children}</div>;

export default TabPanel;
