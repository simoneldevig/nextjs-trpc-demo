import { trpc as t } from "../utils/trpc";
import Link from 'next/link'

const Index = async () => {
  const { posts } = await t.post.allPosts.query();

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl font-extrabold text-center">Posts</h1>

      <div className="flex flex-wrap justify-center gap-5 mt-8">
        {posts.map((post) => (
          <Link key={post.id} href={`/${post.id}`} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
          </Link>
        ))}
      </div>
    </div> 
  );
}

export default Index;
