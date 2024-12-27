import React from "react";
import Image from "next/image";
import RelatedPosts from "./RelatedBlogs";

interface BlogPageProps {
  title: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
  date: string;
  mainImage: string;
  content: string;
  // add related posts check endpoints
}

const BlogPage = ({
  title,
  authorName,
  authorRole,
  authorImage,
  date,
  mainImage,
  content,
}: BlogPageProps) => {

  const relatedPosts = [
    {
      id: 1,
      title: "The Essential Guide to Competitive Programming",
      description: "A comprehensive guide to understanding data structures and algorithms.",
      imageUrl: "/path/to/image1.jpg",
      author: "John Doe",
      date: "Aug 27, 2024",
    },
    {
      id: 2,
      title: "Understanding Algorithm Complexity",
      description: "A deep dive into time and space complexity analysis.",
      imageUrl: "/path/to/image2.jpg",
      author: "Jane Smith",
      date: "Aug 15, 2024",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        <p className="text-sm text-gray-500 mt-2">{date}</p>
      </div>

      {/* Main Image */}
      <div className="mb-8">
        <Image
          src={mainImage}
          alt="Main Image"
          width={1024}
          height={576}
          className="rounded-lg object-cover w-full"
        />
      </div>

      {/* Author Section */}
      <div className="flex items-center justify-center mb-12">
        <Image
          src={authorImage}
          alt={authorName}
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div className="ml-4 text-center">
          <p className="text-lg font-semibold text-gray-900">{authorName}</p>
          <p className="text-sm text-gray-600">{authorRole}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="prose max-w-none">
        <p className="text-xl leading-relaxed text-gray-800">{content}</p>
      </div>
      <div>
        <RelatedPosts posts={relatedPosts}/>
      </div>
    </div>
  );
};

export default BlogPage;
