import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/public/Images/A2SVLogo.svg"

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <Link href="/" className="text-2xl font-bold text-black">
        <Image 
        src={Logo}
        alt={'A2SV logo'}        
        />
      </Link>
      <nav className="flex space-x-6">
        <Link href="#home" className="text-gray-700 hover:text-blue-500">
          Home
        </Link>
        <Link href="#teams" className="text-gray-700 hover:text-blue-500">
          Teams
        </Link>
        <Link href="#success-stories" className="text-gray-700 hover:text-blue-500">
          Success Stories
        </Link>
        <Link href="#about-us" className="text-gray-700 hover:text-blue-500">
          About Us
        </Link>
        <Link href="#blogs" className="text-gray-700 hover:text-blue-500">
          Blogs
        </Link>
        <Link href="#get-involved" className="text-gray-700 hover:text-blue-500">
          Get Involved
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
