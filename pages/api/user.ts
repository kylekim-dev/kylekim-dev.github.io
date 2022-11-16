// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../types";

// Default User
const user: User = {
  fullName: "Kyle Kim",
  email: "kylegoforit@gmail.com",
  phone: "(949) 447-4494",
  github: "https://kylekim-dev.github.io",
  linkedIn: "https://www.linkedin.com/in/kyle-kim-se",
};

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(user);
}
