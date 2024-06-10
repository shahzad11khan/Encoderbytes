// components/Sidebar.js
"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { TiUserAdd } from "react-icons/ti";
import { FaHome, FaUsers, FaProjectDiagram, FaBlog } from "react-icons/fa";
import { MdTouchApp } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";

const Sidebar = () => {
  const router = useRouter();

  // Define menu items with titles, icons, and routes
  const menuItems = [
    { title: "Dashboard", icon: <FaHome />, route: "/AdminDashboard/Home" },
    {
      title: "Registered Admin",
      icon: <TiUserAdd />,
      route: "/AdminDashboard/RegisterAdmin",
    },
    {
      title: "All Team",
      icon: <FaUsers />,
      route: "/AdminDashboard/ShowAllTeam",
    },
    {
      title: "All Projects",
      icon: <FaProjectDiagram />,
      route: "/AdminDashboard/AllProjects",
    },
    {
      title: "Blogs",
      icon: <FaBlog />,
      route: "/AdminDashboard/AllBlogs",
    },
    {
      title: "Vanacies",
      icon: <CiBoxList />,
      route: "/AdminDashboard/ShowVacancy",
    },
    {
      title: "Get In Touch",
      icon: <MdTouchApp />,
      route: "/AdminDashboard/GetInTouch",
    },
    {
      title: "Requests For Joining",
      icon: <FaPersonWalkingArrowRight />,
      route: "/AdminDashboard/RequestForJoining",
    },
  ];

  const handleNavigation = (route) => {
    router.push(route);
  };

  return (
    <aside className="bg-gray-800 text-white h-screen w-20 sm:w-48 lg:w-64 flex flex-col">
      {/* Sidebar header */}

      {/* Menu items */}
      <nav className="flex-1">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer py-4 flex items-center justify-center"
            >
              <a
                onClick={() => handleNavigation(item.route)}
                className="flex flex-col items-center"
              >
                {/* Show icon only on large screens */}
                <div className="flex gap-3 justify-start items-center">
                  <span className="lg:block sm:block ">{item.icon}</span>
                  {/* Show title only on small screens */}
                  <span className="md:block sm:hidden xs:hidden">
                    {item.title}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
