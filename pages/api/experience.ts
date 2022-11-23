// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Experience } from "../../types";
import { TechStack } from "../../types";

// Default User
const experiences: Experience[] = [
    {
        displayOrder: 1,
        companyName: "New Wave Lending Group",
        companyWebsite: "https://www.newwavelending.com",
        startData: new Date('2020-11-15').toISOString(),
        endDate: new Date().toISOString(),
        location: "Whittier, CA",
        usedTechStacks: [
            TechStack.CSharp,
            TechStack.DotNet,
            TechStack.VueJS,
            TechStack.Nuxt,
            TechStack.Vuetify,
            TechStack.HTML,
            TechStack.CSS,
            TechStack.Typescript,
            TechStack.Javascript,
            TechStack.AWS,
            TechStack.BITBUCKET
        ],
        descriptions: [
            "Created 20K+ mortgage loan pipeline web application used by 2k+ active users using .NET, Vue.js and MS SQL Server.",
            "Created an application for LOS, streamline loan origination with modern user interfaces, helped underwriting, processed automation, document management and CRM features, and set up exact data structure, lending products and origination workflow.",
            "Designed REST API, generated disclosure document based on loan data and delivered to borrowers to manage through DocuSign API."
        ]
    },
    {
        displayOrder: 2,
        companyName: "AmWest Funding",
        companyWebsite: "https://www.amwestwholesale.com",
        startData: new Date('2018-02-15').toISOString(),
        endDate: new Date('2020-11-15').toISOString(),
        location: "Brea, CA",
        usedTechStacks: [
            TechStack.CSharp,
            TechStack.DotNet,
            TechStack.Javascript,
            TechStack.HTML,
            TechStack.CSS,
            TechStack.Bootstrap,
            TechStack.React,
            TechStack.MUI,
            TechStack.MSSQL,
            TechStack.Azure
        ],
        descriptions: [
            "Created a credit report inquiry API integrated with CoreLogic.",
            "Development of in-house job posting and onboarding management applications.",
            "Developed code following common security practices and development design patterns."
        ]
    },
    {
        displayOrder: 3,
        companyName: "Bada International",
        companyWebsite: "http://www.chunghousa.com",
        startData: new Date('2016-01-25').toISOString(),
        endDate: new Date('2018-02-15').toISOString(),
        location: "Irvine, CA",
        usedTechStacks: [
            TechStack.CSharp,
            TechStack.DotNet,
            TechStack.Java,
            TechStack.Spring,
            TechStack.Javascript,
            TechStack.HTML,
            TechStack.CSS,
            TechStack.Bootstrap,
            TechStack.MSSQL,
            TechStack.MySQL,
            TechStack.AWS
        ],
        descriptions: [
            "Development of customer and product management web applications using Spring Boot, jQuery, Bootstrap and MySQL.",
            "Development of in-house water purifier and filter inventory management system.",
            "Increase work efficiency through product maintenance automatic scheduler development.",
            "Development of an invoice generation and delivery system.",
            "Created e-commerce sites integrated with PayPal, Stripe, Authorize.",
            "Implemented 10+ responsive web applications.",
        ]
    },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(experiences);
}
