// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ImgShieldUrlMap } from "../../types";
import { TechStack } from "../../types";


// Default User
const imgShieldUrls: ImgShieldUrlMap[] = [
    {
        techStack: TechStack.CSharp,
        imgUrl: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white"
    },
    {
        techStack: TechStack.Java,
        imgUrl: "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white"
    },
    {
        techStack: TechStack.Python,
        imgUrl: ""
    },
]

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(imgShieldUrls);
}
