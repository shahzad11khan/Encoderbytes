import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";

const VacancyTable = () => {
  return (
    <>
      <Header className="min-w-full" />
      <div className="flex gap-4">
        <Sidebar />
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Vacancies</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add New Vacancy
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-800">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2">Vacancy Title</th>
                  <th className="border px-4 py-2">Required Skills</th>
                  <th className="border px-4 py-2">Year of Experience</th>
                  <th className="border px-4 py-2">Edit</th>
                  <th className="border px-4 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Row */}
                <tr>
                  <td className="border px-4 py-2">Frontend Developer</td>
                  <td className="border px-4 py-2">
                    HTML, CSS, JavaScript, React
                  </td>
                  <td className="border px-4 py-2 text-center">3</td>
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

export default VacancyTable;
