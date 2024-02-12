"use client";
import Link from "next/link";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "React Blog",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid id iure voluptatibus quam perferendis ducimus voluptas sapiente sed fugit necessitatibus dolor, tempore odit blanditiis eius aut assumenda, officia libero. Eos?",
    },
    { id: 2, title: "JavaScript Basics", content: "Dolor sit amet..." },
  ];
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to blogApp</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link key={post.id} href={`/post/${post.id}`}>
            <div className="border border-gray-300 p-4 rounded-md hover:bg-gray-100 transition">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.content.slice(0, 100)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
