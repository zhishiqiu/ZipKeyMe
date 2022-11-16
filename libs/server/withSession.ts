import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      account: string;
    };
  }
}

const cookieOptions = {
  cookieName: "userSession",
  password: process.env.COOKIE_PASSWORD!,
};

export function withSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
