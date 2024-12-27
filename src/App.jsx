import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/Landing'; 
import AchievementsPage from './Pages/Achievements';
import HomePage from "./Pages/home";
import Faculty from "./Pages/Faculty";
import Representative from "./Pages/Representative";
import Notfound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/faculty" element={<Faculty />} /> 
        <Route path="/representative" element={<Representative />} /> 
        <Route path="/achievements" element={<AchievementsPage />} />        
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
