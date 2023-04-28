import { t } from "../client";
import { z } from "zod";
import { ofetch } from 'ofetch'

export const postRouter = t.router({
    allPosts: t.procedure
        .input(z.object({ limit: z.number().optional(), page: z.number().optional() }).optional())
        .query(async ({input}) => {
            const allPosts = await ofetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    params: {
                        '_limit': input?.limit ?? 10,
                        '_page': input?.page ?? 1
                    }
                }
            );

            return {
                posts: allPosts as Array<PostType>,
            };

        }),
    postById: t.procedure
        .input(z.object({ id: z.string() }))
        .query(async ({ input }) => {
            const post = await ofetch(
                `https://jsonplaceholder.typicode.com/posts/${input.id}`
            )
            return {
                post: post as PostType,
            };
         }),
    createPost: t.procedure
        .input(
            z.object({
                title: z.string().min(1),
                body: z.string().min(1),
                userId: z.number(),
            })
        )
        .mutation(async ({ input }) => {
            const post = await ofetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    method: "POST",
                    body: JSON.stringify(input),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                }
            )
            
            return {
                response: post as PostType,
            };
        }),
});

// CODE BELOW IS NOT PART OF tRPC SETUP

type PostType = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
