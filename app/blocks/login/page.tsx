"use client"

import React from 'react';
import { Search, GoalIcon, GlobeLock, GalleryHorizontal } from 'lucide-react';
import { useRouter } from 'next/router';
// import { signInWithGoogle, signInWithFacebook, signInWithTwitter } from '../firebase/auth';

const LoginPage: React.FC = () => {
  // const router = useRouter();

  const handleLogin = () => {
    // Handle login logic here
    // router.push('/dashboard');
  };

  const signInWithFacebook = () => {}
  const signInWithGoogle = () => {}
  const signInWithTwitter = () => {}

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-white text-xl font-bold">YourApp</div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">Login</a>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-white rounded-full pl-8 pr-3 py-1 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <a href="#" className="text-white hover:text-gray-300">Pricing</a>
        </div>
      </header>

      {/* Body */}
      <main className="flex-grow flex justify-center items-center">
        <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full">
          <h1 className="text-white text-2xl font-bold mb-4">Welcome Back!</h1>
          <div className="space-y-4">
            <button onClick={signInWithGoogle} className="bg-red-600 text-white rounded-lg py-2 px-4 flex items-center justify-center space-x-2">
              <GlobeLock />
              <span>Login with Google</span>
            </button>
            <button onClick={signInWithFacebook} className="bg-blue-600 text-white rounded-lg py-2 px-4 flex items-center justify-center space-x-2">
              <GoalIcon />
              <span>Login with Facebook</span>
            </button>
            <button onClick={signInWithTwitter} className="bg-blue-400 text-white rounded-lg py-2 px-4 flex items-center justify-center space-x-2">
              <GalleryHorizontal />
              <span>Login with Twitter</span>
            </button>
            <form onSubmit={handleLogin} className="space-y-4">
              <input type="email" placeholder="Email" className="w-full bg-gray-700 text-white rounded-lg py-2 px-4" />
              <input type="password" placeholder="Password" className="w-full bg-gray-700 text-white rounded-lg py-2 px-4" />
              <button type="submit" className="bg-green-500 text-white rounded-lg py-2 px-4 w-full">Login</button>
            </form>
            <div className="text-gray-300 text-center">
              Don't have an account? <a href="#" className="text-blue-400">Sign up now</a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 text-white text-center">
        <p className="mb-2">YourApp &copy; 2024. All Rights Reserved.</p>
        <p>Contact us: info@yourapp.com</p>
      </footer>
    </div>
  );
};

export default LoginPage;