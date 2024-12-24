import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing'; 
import MembersPage from './pages/members';
import EducationPage from './pages/education';
import AchievementsPage from './pages/achievements';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/members" element={<MembersPage />} /> 
        <Route path="/education" element={<EducationPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
