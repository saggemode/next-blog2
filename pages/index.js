/* eslint-disable @next/next/no-img-element */
//import { useContext } from "react";
import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import data from "../utils/data";
import Afirst from "../components/Afirst";
import Asecond from "../components/Asecond";
import Athird from "../components/Athird";
import Afourth from "../components/Afourth";

export default function Home() {
  return (
    <Layout>
      {/* <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2  pt-20">
        {data.posts.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </div> */}

      <div className=" pt-20">
        <Afirst />
        <Asecond />
        <Athird />
        <Afourth/>
      </div>
    </Layout>
  );
}
