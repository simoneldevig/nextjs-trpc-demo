import type { NextApiRequest, NextApiResponse } from "next";
import { renderTrpcPanel } from "trpc-panel";
import { appRouter } from "@nextjs/api";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  if (process.env.NODE_ENV == 'development') {
    res.status(200).send(
      renderTrpcPanel(appRouter, {
        url: 'http://localhost:4000',
      })
    );
  } else {
    res.send(404);
  }
}
