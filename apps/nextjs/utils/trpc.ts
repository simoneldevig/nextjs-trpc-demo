import type { appRouter } from '@nextjs/api';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

function getBaseUrl() {
    if (typeof window !== "undefined") {
        // In the browser, we return a relative URL
        return "";
    }
    // When rendering on the server, we return an absolute URL

    if (process.env.API_URL) {
        return `https://${process.env.API_URL}`;
    }

    // Assumes localhost or defaults to 4000
    return 'http://localhost:4000';
}

export const trpc = createTRPCProxyClient<typeof appRouter>({
  links: [
    httpBatchLink({
      url: getBaseUrl(),
    }),
  ],
});
