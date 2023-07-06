import React from "react";
import Author from "../../components/_child/author";
import Image from "next/image";
import Ralated from "../../components/_child/ralated";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Spinner from "../../components/_child/spinner";
import data from "../../utils/data";

const PostScreen = () => {
  const { query } = useRouter();
  const { slug } = query;
  const post = data.posts.find((x) => x.slug === slug);
  if (!post) return <Spinner></Spinner>;
  return (
    <Layout>
      <div className="pt-20">
        <div className="grid md:grid-cols-4 md:gap-4">
          <div className="md:col-span-2">
            <h3 className="font-bold text-3xl text-center pb-5">
              {post.title || "No Title"}
            </h3>
            <Image
              src={post.image || "/"}
              width={900}
              height={600}
              alt="no picture"
              layout="responsive"
            ></Image>
            <div className="content text-gray-600 text-lg flex flex-col gap-4">
              {post.description || "No Description"}
            </div>
            <div className="flex justify-start">
              {post.author ? <Author {...post.author}></Author> : <></>}
            </div>
          </div>

          <div className=" md:col-span-2">
          <Ralated></Ralated>
          </div>
        </div>
        
      </div>
    </Layout>
  );
};

export default PostScreen;
