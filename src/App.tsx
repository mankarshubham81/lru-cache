import React from 'react';
import Tabs from './components/Tabs/Tabs';
import TabPanel from './components/Tabs/TabPanel';
import Table from './components/Table';
import { useFetchWithCache } from './hooks/useFetchWithCache';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const tabUrls = [
    { label: 'Posts', url: 'https://jsonplaceholder.typicode.com/posts?_limit=5' },
    { label: 'Comments', url: 'https://jsonplaceholder.typicode.com/comments?_limit=5' },
    { label: 'Albums', url: 'https://jsonplaceholder.typicode.com/albums?_limit=5' },
    { label: 'Photos', url: 'https://jsonplaceholder.typicode.com/photos?_limit=5' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dynamic Tabs with Cached Data</h1>
      <Tabs>
        {tabUrls.map((tab, index) => (
          <TabPanel key={index} label={tab.label}>
            <TabContent url={tab.url} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

const TabContent: React.FC<{ url: string }> = ({ url }) => {
  const { data, loading, error } = useFetchWithCache<any>(url);

  if (loading) return <LoadingSpinner />;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;
  if (!data || data.length === 0) return <p>No data available.</p>;

  return <Table data={data} />;
};

export default App;
