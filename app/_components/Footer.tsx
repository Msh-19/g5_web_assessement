import React from "react";
import Link from "next/link";
import Image from "next/image";
import footer from "@/public/Images/Footer.svg";
import socials from "@/public/Images/Social-media.svg";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto flex justify-between items-start px-4">
        <div className="flex items-start space-x-4">
          {/* Placeholder for Image */}
          <Image src={footer} alt={"collaboration"} />
          <div>
            <h3 className="text-lg text-black font-semibold mb-4">
              Get involved in improving tech education in Africa!
            </h3>
            <button className="bg-blue-500 text-black px-6 py-2 rounded hover:bg-blue-600">
              Support Us
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-around">
          <div>
            <h4 className="text-black font-semibold mb-2">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#success-stories"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="#about-us"
                  className="text-gray-700 hover:text-blue-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#get-involved"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-black font-semibold mb-2">Teams</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#board-members"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Board Members
                </Link>
              </li>
              <li>
                <Link
                  href="#advisors-mentors"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Advisors/Mentors
                </Link>
              </li>
              <li>
                <Link
                  href="#executives"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Executives
                </Link>
              </li>
              <li>
                <Link
                  href="#staffs"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Staffs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-black font-semibold mb-2">Blogs</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#recent-blogs"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Recent Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#new-blog"
                  className="text-gray-700 hover:text-blue-500"
                >
                  New Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="container mx-auto flex justify-between items-center mt-8 px-4">
        <div className="text-gray-600">
          &copy; 2020 Africa to Silicon Valley, Inc. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <Image src={socials} alt={"social media pages"} sizes="100px" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
