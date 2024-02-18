"use client";
import { useAllBlogsQuery } from "@/hooks/useAllBlogsQuery";
import Link from "next/link";
import authRidirectHoc from "../hoc/authRidirectHoc";

export interface BlogInterface {
  id: number;
  title: string;
  body: string;
  creator: string;
}

const Home = () => {
  const { data, isError, isLoading, isSuccess } = useAllBlogsQuery();

  const blogs = data?.map((blog: BlogInterface) => ({
    id: blog.id,
    title: blog.title,
    body: blog.body,
    creator: blog.creator,
  }));

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to blogApp</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading && <h1>Blogs are loading ...</h1>}
        {blogs?.map((blog: BlogInterface) => (
          <Link key={blog.id} href={`/blog/${blog.id}`}>
            <div className="border border-gray-300 p-4 rounded-md hover:bg-gray-100 transition">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700">{blog.body?.slice(0, 100)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default authRidirectHoc(Home);
