import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link href="/">
        <a className="text-2xl font-bold text-black">Logo</a>
      </Link>
      <nav className="flex space-x-6">
        <Link href="#home">
          <a className="text-gray-700 hover:text-blue-500">Home</a>
        </Link>
        <Link href="#teams">
          <a className="text-gray-700 hover:text-blue-500">Teams</a>
        </Link>
        <Link href="#success-stories">
          <a className="text-gray-700 hover:text-blue-500">Success Stories</a>
        </Link>
        <Link href="#about-us">
          <a className="text-gray-700 hover:text-blue-500">About Us</a>
        </Link>
        <Link href="#blogs">
          <a className="text-gray-700 hover:text-blue-500">Blogs</a>
        </Link>
        <Link href="#get-involved">
          <a className="text-gray-700 hover:text-blue-500">Get Involved</a>
        </Link>
      </nav>
      <div className="flex space-x-4">
        <button className="text-blue-500 hover:text-blue-700">Login</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Donate</button>
      </div>
    </header>
  );
};

export default Header;
