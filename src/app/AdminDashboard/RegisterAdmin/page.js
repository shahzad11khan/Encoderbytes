"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
import Modal from "../components/Modal";

const AdminTable = () => {
  const [showmodal, setshowmodal] = useState(false);
  return (
    <>
      <Header className="min-w-full" />
      <div className="flex  gap-4">
        <Sidebar />
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Admin List</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setshowmodal(true)}
            >
              Add New Admin
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-800">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2">S.No</th>
                  <th className="border px-4 py-2">User</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Phone</th>
                  <th className="border px-4 py-2">Edit</th>
                  <th className="border px-4 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Row */}
                <tr>
                  <td className="border px-4 py-2 text-center">1</td>
                  <td className="border px-4 py-2">John Doe</td>
                  <td className="border px-4 py-2">john.doe@example.com</td>
                  <td className="border px-4 py-2">123-456-7890</td>
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
          {showmodal && <Modal isclose={() => setshowmodal(false)} />}
        </div>
      </div>
    </>
  );
};

export default AdminTable;
