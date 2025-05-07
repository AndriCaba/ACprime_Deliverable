'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Chatbot from '@/components/Chatbot/ChatBot.jsx';

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    // Show img2 after 4 seconds
    const img2Timer = setTimeout(() => {
      setShowSecondImage(true);
    }, 4000);

    // Stop loading after 6 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => {
      clearTimeout(img2Timer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Loading Overlay */}
      <div
        className={`duration-800 fixed inset-0 flex items-center justify-center bg-[#004588] transition-opacity ease-in-out ${
          isLoading
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        style={{ zIndex: 50 }}
      >
        <div className="container relative h-[150px] w-[400px]">
          <img
            src={
              showSecondImage
                ? '/images/logo/Gif_loader2.gif'
                : '/images/logo/Test4.gif'
            }
            alt={
              showSecondImage
                ? 'AC Prime company name'
                : 'AC Prime spinning logo'
            }
            className={`shadow-lg absolute rounded-full object-contain ${!showSecondImage ? 'p-3' : ''}`}
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 51,
            }}
          />
        </div>
      </div>

      {/* Main App Content */}
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Navbar />
        <main className="min-h-[80vh] pt-[65px]">{children}</main>
        <Chatbot />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
