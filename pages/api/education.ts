// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Education } from "../../types";

// Default User
const educations: Education[] = [
    {
        displayOrder: 1,
        name: "Korea Aerospace University",
        startData: "March, 2008",
        endDate: "February, 2015",
        location: "Seoul, Republic of Korea",
        major: "B.S. Computer Science"
    },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(educations);
}
