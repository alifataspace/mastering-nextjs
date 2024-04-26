'use client'

import React, { useState } from "react"
import { Search, Sun, Moon } from 'lucide-react';

export default function NavbarPage(){
 return (
  <React.Fragment>
   
  </React.Fragment>
 )
}

interface NavbarProps {
  onThemeToggle: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onThemeToggle }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Handle search logic here
    console.log('Search query:', searchQuery);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-white text-xl font-bold">YourApp</span>
        <div className="ml-4 flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-white rounded-full pl-8 pr-3 py-1 focus:outline-none focus:ring focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <ul className="flex space-x-4 text-white">
            <li><a href="#">Home</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="text-white mr-4"
          onClick={onThemeToggle}
          aria-label="Toggle Theme"
        >
          <Sun />
        </button>
        <button
          className="text-white"
          onClick={onThemeToggle}
          aria-label="Toggle Theme"
        >
          <Moon />
        </button>
      </div>
    </nav>
  );
};