import React from 'react';

interface TableProps {
  data: Record<string, any>[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  if (data.length === 0) return <p>No data available to display.</p>;

  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key} className="border border-gray-300 px-4 py-2 text-left">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="hover:bg-gray-100">
            {Object.values(row).map((value, i) => (
              <td key={i} className="border border-gray-300 px-4 py-2">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
