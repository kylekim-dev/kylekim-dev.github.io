// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ImgShieldUrlMap } from "../../types";
import { TechStack } from "../../types";


// Default User
const imgShieldLookUp: ImgShieldUrlMap[] = [
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
        imgUrl: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    },
    {
        techStack: TechStack.MSSQL,
        imgUrl: "https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white",
    },
    {
        techStack: TechStack.MySQL,
        imgUrl: "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
    },
    {
        techStack: TechStack.HTML,
        imgUrl: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    },
    {
        techStack: TechStack.CSS,
        imgUrl: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    },
    {
        techStack: TechStack.Javascript,
        imgUrl: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white",
    },
    {
        techStack: TechStack.Typescript,
        imgUrl: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    },
    {
        techStack: TechStack.React,
        imgUrl: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    },
    {
        techStack: TechStack.Next,
        imgUrl: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
    },
    {
        techStack: TechStack.VueJS,
        imgUrl: "https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D",
    },
    {
        techStack: TechStack.Nuxt,
        imgUrl: "https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82",
    },
    {
        techStack: TechStack.Azure,
        imgUrl: "https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white",
    },
    {
        techStack: TechStack.AWS,
        imgUrl: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
    },
    {
        techStack: TechStack.DotNet,
        imgUrl: "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white",
    },
    {
        techStack: TechStack.Spring,
        imgUrl: "https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white",
    },
    {
        techStack: TechStack.Bootstrap,
        imgUrl: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
    },
    {
        techStack: TechStack.MUI,
        imgUrl: "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white",
    },
    {
        techStack: TechStack.Vuetify,
        imgUrl: "https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF",
    },
    {
        techStack: TechStack.VisualStudio,
        imgUrl: "https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white",
    },
    {
        techStack: TechStack.VSCODE,
        imgUrl: "https://camo.githubusercontent.com/400cd54f362c71a034b81df2145126a1b8ce94ecee21db04bd836ab5fc2e893f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5653253230436f64652d3030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d76697375616c2d73747564696f2d636f6465266c6f676f436f6c6f723d7768697465",
    },
    {
        techStack: TechStack.INTELLIJIDEA,
        imgUrl:"https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white",
    },
    {
        techStack: TechStack.GIT,
        imgUrl: "https://camo.githubusercontent.com/e51ce283337074d916f58ce83728fb4a26c8fdcc28adcd01a8a7afca0226459f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769742d4630353033322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974266c6f676f436f6c6f723d7768697465",
    },
    {
        techStack: TechStack.GITHUB,
        imgUrl: "https://camo.githubusercontent.com/cb501cb6971aff81421503d9b02fbc912c38eb3196e9f140ef7636ee366701b6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3138313731373f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465",
    },
    {
        techStack: TechStack.BITBUCKET,
        imgUrl: "https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white",
    },
    {
        techStack: TechStack.SLACK,
        imgUrl: "https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white",
    },
]

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(imgShieldLookUp);
}
