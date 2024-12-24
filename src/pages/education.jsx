import React from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';

function EducationPage() {
  return (
    <div>
      <Header />
      <div className="container mx-auto flex">
      <Sidebar />        
        <main className="flex-grow p-4">
          {/* Education Page Content */}
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p>This is the education page content.</p>          
        </main>        
      </div>
      
    </div>
  );
}

export default EducationPage;