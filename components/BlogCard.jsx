/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import UserCard from "./UserCard";


export default function BlogCard({ post }) {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="flex bg-white cursor-pointer dark:bg-gray-900 shadow-sm  hover:shadow-2xl transition-all duration-500 px-6 pt-4 pb-4 rounded-lg ">
        <img
          className="w-1/4 h-56 object-contain bg-cover rounded-md border-none text-white"
          src={post.image}
          alt="title"
        />
        <div className="ml-7 w-3/4 ">
          <div className="my-3">
            <p className="text-xl font-bold dark:text-gray-50 transition-all duration-500">
            {post.title}
            </p>
          </div>
          <div>
            <p className="dark:text-gray-50 transition-all duration-500">
            {post.description}
            </p>
          </div>

          <UserCard />
        </div>
        <br />
      </div>
    </Link>
  );
}
