import { t } from "../client";

import { postRouter } from "./post";

export const appRouter = t.router({
    post: postRouter,
});
