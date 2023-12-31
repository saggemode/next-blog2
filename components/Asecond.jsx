import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
import data from "../utils/data";


export default function Asecond() {
  //const { data, isLoading, isError } = fetcher('api/posts')

  // if(isLoading) return <Spinner></Spinner>;
  // if(isError) return <Error></Error>

  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data.posts.map((post) => (
          <PostItem post={post} key={post.slug}></PostItem>
        ))}
      </div>
    </section>
  );
}

function PostItem({ post }) {
  const { id, slug, title, category, image, published, author } = post;
  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={image || "/"}
              className="rounded"
              width={500}
              height={350}
              alt="no pic"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${slug}`}>
            <a className="text-orange-600 hover:text-orange-800">
              {category || "Unknown"}
            </a>
          </Link>
          <Link href={`/posts/${slug}`}>
            <a className="text-gray-800 hover:text-gray-600">
              - {published || "Unknown"}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${slug}`}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {title || "Title"}
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
        {author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   await db.connect();
//   const posts = await Post.find().lean();
//   return {
//     props: {
//       posts: products.map(db.convertDocToObj),
//     },
//   };
// }