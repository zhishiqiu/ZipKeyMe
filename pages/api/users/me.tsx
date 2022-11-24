import { NextApiRequest, NextApiResponse } from "next";
import apiHandler from "@libs/server/apiHandler";
import client from "@libs/server/client";
import { withSession } from "@libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const profile = await client.user.findUnique({
    where: { id: req.session.user?.account },
    select: {
      id: true,
      name: true,
      household: {
        select: {
          aptDong: true,
          aptHo: true,
        },
      },
    },
  });
  res.json({
    ok: true,
    profile,
  });
}

export default withSession(
  apiHandler({
    method: ["GET"],
    handler,
    isPrivate: true,
  })
);
