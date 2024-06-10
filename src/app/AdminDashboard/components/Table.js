import React from "react";

const TableWithTitle = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-white">Top Projects</h2>
        <h2 className="text-xl font-semibold text-white pr-4">All</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-800 w-full text-white">
          <thead>
            <tr className="bg-gray-400">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Project Name</th>
              <th className="px-4 py-2">Lead</th>
              <th className="px-4 py-2">Company</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">Engineering</td>
              <td className="border px-4 py-2">Software Developer</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">Engineering</td>
              <td className="border px-4 py-2">Software Developer</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableWithTitle;
