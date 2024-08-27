import React from "react";
import Image from "next/image";
import Link from "next/link";




const BlogCard = ({
  title,
  author,
  subheading,
  date,
  description,
  tags,
  text,
  mainImageUrl,
  additionalImageUrl,
}: BlogCardProps) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-24">
      <div className="flex flex-1 items-start md:mr-4">
        {/* Main Image */}
        <Image
          src={mainImageUrl}
          alt={title}
          width={100} // Smaller size
          height={75} // Smaller size
          className="rounded-lg object-cover mr-4"
        />

        {/* Text Information */}
        <Link href={"/BlogPage"}>
          <div>
            <div className="text-gray-600 text-sm flex items-center mb-2">
              <span className="font-semibold mr-2">{author}</span>
              <span>•</span>
              <span className="ml-2">{date}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{subheading}</h4>
            <p className="text-gray-700 mb-4">{description}</p>
            <p className="text-gray-700 mb-4">
              {text}
            </p>
            <div className="flex space-x-2 mb-4">
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
        </Link>
      </div>

      {/* Additional Image Section */}
      {additionalImageUrl && (
        <div className="mt-4 md:mt-0 md:ml-4 flex-shrink-0">
          <Image
            src={additionalImageUrl}
            alt="Additional"
            width={400} // Larger size
            height={300} // Larger size
            className="rounded-lg object-cover"
          />
        </div>
      )}
      {/* Main Content Section */}
      
    </div>
  );
};

export default BlogCard;
