import React, { useState, useEffect } from 'react';
import Sidebar from '../Navigations/Sidebar';
import Header from '../Navigations/Header';

function Member() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [question, setQuestion] = useState("What is database?");
  const [answer, setAnswer] = useState(null);

  // Fetch the answer from the backend based on the question
  useEffect(() => {
    const fetchAnswer = async () => {
      // Log the question to ensure it's set properly
      console.log('Fetching for question:', question);

      if (!question) {
        setAnswer("No question provided.");
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/answers?question=${encodeURIComponent(question)}`);

        if (!response.ok) {
          throw new Error("Failed to fetch answer");
        }

        const data = await response.json();
        
        if (data.answer) {
          setAnswer(data.answer); // Set the answer if found
        } else {
          setAnswer("No answer found for this question.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setAnswer("Failed to load the answer.");
      }
    };

    fetchAnswer();
  }, [question]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow bg-[#F4F5F7]">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Displaying the question and its answer */}
              <div>
                <h1>{question}</h1>
                <p>{answer || "Loading..."}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Member;