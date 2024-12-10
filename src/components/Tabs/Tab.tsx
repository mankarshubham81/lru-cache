import React, { useState } from 'react';

interface TabsProps {
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="flex space-x-4 border-b-2 pb-2">
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child) ? (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 ${
                activeIndex === index ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
              }`}
            >
              {child.props.label}
            </button>
          ) : null
        )}
      </div>
      <div className="mt-4">
        {React.Children.toArray(children)[activeIndex]}
      </div>
    </div>
  );
};

export default Tabs;
