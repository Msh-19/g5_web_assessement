import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto flex justify-between items-start px-4">
        <div className="flex items-start space-x-4">
          {/* Placeholder for Image */}
          <img 
            src="/path-to-your-image.jpg" 
            alt="Get involved in improving tech education in Africa" 
            className="w-20 h-20 object-contain"
          />
          <div>
            <h3 className="text-lg font-semibold mb-4">Get involved in improving tech education in Africa!</h3>
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
              Support Us
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-around">
          <div>
            <h4 className="font-semibold mb-2">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home">
                  <a className="text-gray-700 hover:text-blue-500">Home</a>
                </Link>
              </li>
              <li>
                <Link href="#success-stories">
                  <a className="text-gray-700 hover:text-blue-500">Success Stories</a>
                </Link>
              </li>
              <li>
                <Link href="#about-us">
                  <a className="text-gray-700 hover:text-blue-500">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="#get-involved">
                  <a className="text-gray-700 hover:text-blue-500">Get Involved</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Teams</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#board-members">
                  <a className="text-gray-700 hover:text-blue-500">Board Members</a>
                </Link>
              </li>
              <li>
                <Link href="#advisors-mentors">
                  <a className="text-gray-700 hover:text-blue-500">Advisors/Mentors</a>
                </Link>
              </li>
              <li>
                <Link href="#executives">
                  <a className="text-gray-700 hover:text-blue-500">Executives</a>
                </Link>
              </li>
              <li>
                <Link href="#staffs">
                  <a className="text-gray-700 hover:text-blue-500">Staffs</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Blogs</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#recent-blogs">
                  <a className="text-gray-700 hover:text-blue-500">Recent Blogs</a>
                </Link>
              </li>
              <li>
                <Link href="#new-blog">
                  <a className="text-gray-700 hover:text-blue-500">New Blog</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center mt-8 px-4">
        <div className="text-gray-600">&copy; 2020 Africa to Silicon Valley, Inc. All rights reserved.</div>
        <div className="flex space-x-4">
          {/* Replace "#" with actual social media links */}
          <a href="#" className="text-gray-700 hover:text-blue-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
