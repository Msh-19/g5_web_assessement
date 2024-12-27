import React from "react";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  author: string;
  date: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

const BlogCard = ({
  title,
  author,
  date,
  description,
  tags,
  imageUrl,
}: BlogCardProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={150}
          className="rounded-lg object-cover"
        />
      </div>
      <div>
        <div className="text-gray-600 text-sm flex items-center mb-2">
          <span className="font-semibold mr-2">{author}</span>
          <span>•</span>
          <span className="ml-2">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex space-x-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
