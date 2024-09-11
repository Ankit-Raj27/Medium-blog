import React from 'react';
import AppBar from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

const BlogCardSkeleton: React.FC = () => (
  <div className="max-w-sm w-full mx-auto">
    <div className="animate-pulse flex space-y-4 mb-4">
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  </div>
); 

function Blogs() {
  const { loading, blogs } = useBlogs();
  
  if (loading) {
    return (
      <div>
        <AppBar />
        <div className="flex flex-col items-center space-y-4 mt-4">
          {[...Array(5)].map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="space-y-4 mt-4">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name}
              title={blog.title}
              content={blog.content}
              publishedDate={"2nd Feb 2024"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;