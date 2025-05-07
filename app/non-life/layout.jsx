// 'use client';

// import { useState, useEffect } from 'react';
// import Navbar from '@/components/navbar';
// import Footer from '@/components/footer';
// import Chatbot from '@/components/Chatbot/ChatBot.jsx';

// const Layout = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 2500);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="h-full">
//       {/* Loading Screen */}
//       {isLoading && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#002255] transition-opacity duration-500">
//           <div className="relative flex items-center justify-center">
//             {/* Radio Wave Animation */}
//             <div className="animate-radio-wave absolute h-32 w-32 rounded-full border-4 border-white opacity-0"></div>
//             <div className="animate-radio-wave delay-1 absolute h-40 w-40 rounded-full border-4 border-white opacity-0"></div>
//             <div className="animate-radio-wave delay-2 absolute h-48 w-48 rounded-full border-4 border-white opacity-0"></div>

//             {/* Logo with White Background & Glow */}
//             <div className="shadow-xl animate-glow z-10 flex h-24 w-24 items-center justify-center rounded-full bg-white">
//               <img
//                 src="/images/logo/HD_Logo.png" // Ensure correct path
//                 alt="Logo"
//                 className="h-16 w-16 object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Main Content with Smooth Fade-in */}
//       <div
//         className={`transition-opacity duration-1000 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}
//       >
//         <Navbar />
//         <main className="pt-[65px]">{children}</main>
//       </div>

//       <Chatbot />
//       <Footer />

//       {/* Modern Styles */}
//       <style jsx>{`
//         @keyframes radio-wave {
//           0% {
//             transform: scale(0);
//             opacity: 0.8;
//           }
//           100% {
//             transform: scale(1.5);
//             opacity: 0;
//           }
//         }

//         @keyframes glow {
//           0% {
//             box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
//           }
//           50% {
//             box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.6);
//           }
//           100% {
//             box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
//           }
//         }

//         .animate-radio-wave {
//           animation: radio-wave 1s linear infinite;
//         }

//         .delay-1 {
//           animation-delay: 0.5s;
//         }

//         .delay-2 {
//           animation-delay: 1s;
//         }
//         .delay-3 {
//           animation-delay: 1.5s;
//         }

//         .animate-glow {
//           animation: glow 2s ease-in-out infinite alternate;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Layout;

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
