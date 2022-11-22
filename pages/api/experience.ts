// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Experience } from "../../types";
import { TechStack } from "../../types";

// Default User
const experiences: Experience[] = [
    {
        displayOrder: 1,
        companyName: "",
        startData: new Date(),
        endDate: new Date(),
        location: "",
        isPresent: false,
        usedTechStacks: [
            TechStack.Java,
            TechStack.CSharp
        ],
        descriptions: [
            "",
            ""
        ]
    },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(experiences);
}
