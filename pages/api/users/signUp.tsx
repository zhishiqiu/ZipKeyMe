import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import apiHandler from "@libs/server/apiHandler";
import { withSession } from "@libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    account,
    password,
    name,
    birth,
    email,
    gender,
    phone,
    address,
    agree,
  } = req.body;

  const foundUser = await client.user.findUnique({
    where: {
      id: account,
    },
  });
}

export default withSession(apiHandler({ method: "POST", handler }));
