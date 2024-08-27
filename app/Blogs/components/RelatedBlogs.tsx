import React from "react";
import Image from "next/image";

type Post = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  date: string;
};

interface RelatedPostsProps {
  posts: Post[];
}

function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={post.imageUrl}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{post.date} by {post.author}</p>
              <p className="text-gray-700 text-sm">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedPosts;
