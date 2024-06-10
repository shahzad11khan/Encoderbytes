import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
const ContactTable = () => {
  return (
    <>
      <Header className="min-w-full" />
      <div className="flex  gap-4">
        <Sidebar />
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Contacts</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-800">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Phone</th>
                  <th className="border px-4 py-2">Message</th>
                  <th className="border px-4 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Row */}
                <tr>
                  <td className="border px-4 py-2">John Doe</td>
                  <td className="border px-4 py-2">john.doe@example.com</td>
                  <td className="border px-4 py-2">123-456-7890</td>
                  <td className="border px-4 py-2">
                    Hello, I would like to inquire about your services.
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

export default ContactTable;
