import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";

const ProjectTable = () => {
  return (
    <>
      <Header className="min-w-full" />
      <div className="flex gap-4">
        <Sidebar />
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Projects</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add New Project
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-800">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2">Image</th>
                  <th className="border px-4 py-2">Project Category Name</th>
                  <th className="border px-4 py-2">Project Name</th>
                  <th className="border px-4 py-2">Project Description</th>
                  <th className="border px-4 py-2">Edit</th>
                  <th className="border px-4 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Row */}
                <tr>
                  <td className="border px-4 py-2">
                    <img
                      src="/path/to/image.jpg"
                      alt="Project"
                      className="h-16 w-16 object-cover"
                    />
                  </td>
                  <td className="border px-4 py-2">Web Development</td>
                  <td className="border px-4 py-2">Portfolio Website</td>
                  <td className="border px-4 py-2">
                    A personal portfolio website to showcase my projects and
                    skills.
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                      Edit
                    </button>
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <button className="text-red-500 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    <img
                      src="/path/to/image.jpg"
                      alt="Project"
                      className="h-16 w-16 object-cover"
                    />
                  </td>
                  <td className="border px-4 py-2">Mobile App</td>
                  <td className="border px-4 py-2">Fitness Tracker</td>
                  <td className="border px-4 py-2">
                    A mobile app to track fitness activities and monitor
                    progress.
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                      Edit
                    </button>
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <button className="text-red-500 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectTable;
