import { trpc as t } from "../../utils/trpc";
import Link from 'next/link'

const Post = async ({
  params,
}: {
  params: { id: string };
}) => {
  const {post} = await t.post.postById.query({id: params.id});

  return (
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-4xl font-extrabold text-center mb-5">{post.title}</h1>
      <p className="text-center mb-6">{post.body}</p>
            
      <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go back
      </Link>
    </div> 
  );
}

export default Post;
