import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function MembersPage() {
  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto flex items-center justify-center py-8">
          <div className="text-center">
            {/* Members Page Content */}
            <h2 className="text-2xl font-bold mb-4">Members</h2>
            <p>This is the members page content.</p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MembersPage;