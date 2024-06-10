import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
import BarChart from "../components/BarChart";
import DonutChart from "../components/DonutChart";
import TableWithTitle from "../components/Table";
import Image from "next/image";

const AdminHome = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    values: [65, 59, 80, 81, 56, 55, 40], // Sample data values
  };
  return (
    <>
      <Header className="min-w-full" />
      <div className="flex  gap-4">
        <Sidebar />
        <mian className="w-full mt-5 h-60">
          <section className="grid grid-cols-2 min-w-full justify-evenly gap-4">
            <div className="w-full h-72 flex justify-center items-center  bg-gray-800 rounded-xl">
              {" "}
              <BarChart data={data} />
            </div>

            <div className="w-full h-72 flex justify-center items-center  bg-gray-800 rounded-xl">
              <DonutChart data={data} />
            </div>
            <div className="w-full h-64 p-4 bg-gray-800 rounded-xl">
              <TableWithTitle />
            </div>
            <div className="w-full h-72 flex flex-col items-center gap-3 text-white text-center">
              {" "}
              {/* <TableWithTitle /> */}
              <div className="h-16 bg-gray-700 rounded-xl w-full flex px-3 items-center border-2 border-gray-600">
                <div className="flex items-center">
                  <div className="mr-2">
                    <Image
                      src="/team/001.jpg"
                      alt="image"
                      width={90}
                      height={90}
                      className="rounded-full h-10 w-10"
                    />
                  </div>
                  <div className="flex flex-col pl-5">
                    <span className="text-white flex justify-start">
                      Sultan Khan
                    </span>
                    <span className=" text-xs text-gray-400 flex justify-start">
                      Hi there
                    </span>
                  </div>
                </div>
              </div>
              {/* <div className="h-10 bg-gray-700 rounded-xl w-full  flex justify-center items-center">
                A
              </div>
              <div className="h-10 bg-gray-700 rounded-xl w-full  flex justify-center items-center">
                A
              </div>
              <div className="h-10 bg-gray-700 rounded-xl w-full  flex justify-center items-center">
                A
              </div>
              <div className="h-10 bg-gray-700 rounded-xl w-full  flex justify-center items-center">
                A
              </div> */}
            </div>
          </section>
        </mian>
      </div>
    </>
  );
};

export default AdminHome;
