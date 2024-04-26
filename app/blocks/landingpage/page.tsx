"use client"

import React from 'react';
import { Search, Car } from 'lucide-react';
// import { useRouter } from 'next/router';

const LandingPage: React.FC = () => {
  // const router = useRouter();

  const handleSearch = () => {
    // Handle search logic here
    // router.push('/search');
  };

  const signInWithFacebook = () => {}
  const signInWithGoogle = () => {}
  const signInWithTwitter = () => {}

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black p-4 flex justify-between items-center">
        <div className="text-white text-xl font-bold">Rental Mobil</div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari mobil..."
              className="bg-gray-800 text-white rounded-full pl-8 pr-3 py-1 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button onClick={handleSearch} className="bg-gray-800 text-white rounded-lg py-2 px-4 flex items-center justify-center space-x-2">
            <Car />
            <span>Temukan di dekatmu</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mt-12">Sewa Mobil dengan Mudah</h1>
        <p className="text-lg text-gray-300 mt-4 max-w-md text-center">
          Temukan mobil yang sesuai dengan kebutuhan Anda dan nikmati perjalanan Anda dengan nyaman.
        </p>
        <div className="mt-8">
          <Car className="text-white w-24 h-24" />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black p-4 text-white text-center">
        <p className="mb-2">Rental Mobil &copy; 2024. All Rights Reserved.</p>
        <p>Contact us: info@rentalmobil.com</p>
      </footer>
    </div>
  );
};

export default LandingPage;
