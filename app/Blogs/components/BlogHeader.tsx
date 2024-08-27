import React from 'react';

const BlogHeader = () => {
  return (
    <header className="flex items-center justify-between ml-12 bg-white">
  {/* BLOGS Heading */}
  <h1 className="text-xl text-gray-800">
    Blogs
  </h1>

  {/* Container for Search Bar and New Blog Button */}
  <div className="flex items-center space-x-4 flex-1 justify-end">
    {/* Search Bar */}
    <input
      type="text"
      placeholder="Search..."
      className="w-[380px] h-[66px] px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 " // Add ml-auto to push it to the right
    />

    {/* New Blog Button */}
    <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-600">
      <span>+</span>
      <span>New Blog</span>
    </button>
  </div>
</header>
  );
};

export default BlogHeader;
