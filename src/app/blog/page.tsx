"use client";
import React from "react";
import authRidirectHoc from "../../hoc/authRidirectHoc";

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full lg:w-3/4">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold mb-2">{`blog.title`}</h1>
          <p className="text-gray-700 text-base mb-4">{`blog.description`}</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-600 text-sm">Creator: {`blog.creator`}</p>
            <p className="text-gray-600 text-sm">
              Published: {`blog.isPublished` ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default authRidirectHoc(BlogPage);
