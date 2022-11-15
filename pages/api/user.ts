// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../types";

// Default User
const user: User = {
  fullName: "Dongmin Kim",
  email: "kylegoforit@gmail.com",
  phone: "9494474494",
  github: "https://github.com/kylekim-dev",
  linkedIn: "https://www.linkedin.com/in/kyle-kim-se/",
};

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(user);
}
