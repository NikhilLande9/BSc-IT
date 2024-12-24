import React from 'react';
import HeroSection from '../components/herosection'; 
import Footer from '../components/footer'; // Import Footer component

function LandingPage() {
  return (
    <div>
      <HeroSection /> 
      <Footer /> {/* Add Footer component here */}
      {/* Other landing page content here: */}
      {/* e.g., features, benefits, testimonials, contact form */}
    </div>
  );
}

export default LandingPage;