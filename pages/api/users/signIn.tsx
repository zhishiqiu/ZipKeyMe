import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import apiHandler from "@libs/server/apiHandler";
import { withSession } from "@libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { account, password } = req.body;

  const foundUser = await client.user.findUnique({
    where: {
      id: account,
    },
  });

  if (!foundUser) {
    return res.json({ ok: false, message: "Invalid account" });
  } else if (!foundUser.isAccept) {
    return res.json({ ok: false, message: "No permission" });
  } else if (foundUser.pwd !== password) {
    return res.json({ ok: false, message: "Invalid password" });
  } else {
    req.session.user = {
      account: foundUser.id,
    };
    await req.session.save();
    res.json({ ok: true });
  }
}

export default withSession(apiHandler({ method: ["POST"], handler }));
