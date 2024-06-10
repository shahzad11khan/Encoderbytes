import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";

const Blogs = () => {
  return (
    <>
      <Header className="min-w-full" />
      <div className="flex gap-4">
        <Sidebar />
        <div>Blogs</div>
      </div>
    </>
  );
};

export default Blogs;
