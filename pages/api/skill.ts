// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Skill } from "../../types";

// Default User
const skills: Skill[] = [
  {
    type: 1,
    name: 'Java',
  },
  {
    type: 1,
    name: 'C#',
  },
  {
    type: 1,
    name: 'JavaScript',
  },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(skills);
}
