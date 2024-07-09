import React from 'react';

interface Topic {
  name: string;
  count: number;
}

const topics: Topic[] = [
  { name: 'Oil', count: 403 },
  { name: 'Gas', count: 89 },
  { name: 'Growth', count: 51 },
  { name: 'Energy', count: 43 },
  { name: 'Export', count: 38 },
  { name: 'Production', count: 35 },
  { name: 'Economy', count: 20 },
];

const BarChart: React.FC = () => {
  const maxCount = Math.max(...topics.map(topic => topic.count));

  return (
    <div className="p-4">
      <div>
        {topics.map(topic => (
          <div key={topic.name} className="mb-[9px]">
            <div className="flex justify-between mb-1">
              <span>{topic.name}</span>
              <span>{topic.count}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-[#3565df] h-4 rounded-[50px]"
                style={{ width: `${(topic.count / maxCount) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
