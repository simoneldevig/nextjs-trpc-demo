import { trpc as t } from "../../utils/trpc";
import Link from 'next/link'

const Post = async ({
  params,
}: {
  params: { id: string };
}) => {
  const {post} = await t.post.postById.query({id: params.id});

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center mb-5">{post.title}</h1>
      <p className="text-center">{post.body}</p>
    </div> 
  );
}

export default Post;
