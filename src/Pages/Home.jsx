import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Sidebar from '../Navigations/Sidebar';
import Header from '../Navigations/Header';

function Member() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  const handleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };


const semesters = [
    {
      id: 1,
      title: "Semester 1",
      syllabus: ["Mathematics I", "Programming Fundamentals", "Digital Logic"],
    },
    {
      id: 2,
      title: "Semester 2",
      syllabus: ["Mathematics II", "Data Structures", "Operating Systems"],
    },
    {
      id: 3,
      title: "Semester 3",
      syllabus: ["Database Management", "Computer Networks", "Java Programming"],
    },
    {
      id: 4,
      title: "Semester 4",
      syllabus: ["Software Engineering", "Web Technologies", "AI Basics"],
    },
    {
      id: 5,
      title: "Semester 5",
      syllabus: ["Machine Learning", "Cloud Computing", "Cybersecurity"],
    },
    {
      id: 6,
      title: "Semester 6",
      syllabus: ["Project Management", "Big Data", "Mobile Development"],
    },
  ];


  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main content */}
        <main className="grow bg-[#F4F5F7]">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Dashboard actions */}
            <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Semester Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {semesters.map((semester) => (
          <div
            key={semester.id}
            className="border rounded-lg shadow-lg bg-white transition-all duration-300 overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {semester.title}
              </h2>
              <button
                onClick={() => handleExpand(semester.id)}
                aria-expanded={expanded === semester.id}
                className="text-indigo-600 font-medium mt-2 focus:outline-none hover:underline"
              >
                {expanded === semester.id ? "Collapse" : "Expand"}
              </button>
            </div>
            <div
              className={`transition-[max-height] duration-300 overflow-hidden ${
                expanded === semester.id ? "max-h-screen" : "max-h-0"
              }`}
            >
              {expanded === semester.id && (
                <div className="p-4 bg-gray-50">
                  <ul className="space-y-2">
                    <a href='/syllabus/:semesterId'>{semester.syllabus.map((subject, index) => (
                      <li
                        key={index}
                        className="text-gray-600 text-sm border-b pb-2 last:border-b-0"
                      >
                        {subject}
                      </li>
                    ))}</a>
                  </ul>
                  <button
                    onClick={() => navigate(`/syllabus/${semester.id}`)}
                    className="text-sm mt-4 text-white bg-indigo-600 py-1 px-3 rounded hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  >
                    View Detailed Syllabus
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
     </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Member;
