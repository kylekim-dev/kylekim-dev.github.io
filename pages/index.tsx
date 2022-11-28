import React, { useEffect, useState } from "react";
import moment from 'moment';
import Script from 'next/script';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import { Skill } from "../types";
import { User } from "../types";
import { Experience } from "../types";
import { Education } from "../types";
import { SkillCategory } from "../types";
import { TechStack } from "../types";
// import { Category } from "@mui/icons-material";

const profile: User = {
  fullName: "Kyle Kim",
  email: "kylegoforit@gmail.com",
  phone: "(949) 447-4494",
  github: "https://github.com/kylekim-dev",
  linkedIn: "https://www.linkedin.com/in/kyle-kim-se",
};

const experiencesData: Experience[] = [
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
      "Created 20K+ mortgage loan pipeline web applications used by 2k+ active users using .NET, Vue.js, and MS SQL Server.",
      "Created an application for LOS, streamlined loan origination with modern user interfaces, helped underwriting, processed automation, document management, and CRM features, and set up the exact data structure, lending products, and origination workflow.",
      "Designed REST API, generated disclosure documents based on loan data and delivered them to borrowers to manage through DocuSign API."
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
      "Development of customer and product management web applications using Spring Boot, jQuery, Bootstrap, and MySQL.",
      "Development of an in-house water purifier and filter inventory management system.",
      "Increase work efficiency through product maintenance automatic scheduler development.",
      "Development of an invoice generation and delivery system.",
      "Created e-commerce sites integrated with PayPal, Stripe, and Authorize.",
      "Implemented 10+ responsive web applications.",
    ]
  },
];

const educationsData: Education[] = [
  {
    displayOrder: 1,
    name: "Korea Aerospace University",
    startData: "March, 2008",
    endDate: "February, 2015",
    location: "Seoul, Republic of Korea",
    major: "B.S. Computer Science"
  },
];

const skillData: Skill[] = [
  {
      category: SkillCategory.BackEnd,
      name: TechStack.CSharp,
      imgShieldUrl: "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white",
      advancedLevel: 3
  },
  {
      category: SkillCategory.BackEnd,
      name: TechStack.Java,
      imgShieldUrl: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",
      advancedLevel: 2
  },
  {
      category: SkillCategory.BackEnd,
      name: TechStack.Python,
      imgShieldUrl: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
      advancedLevel: 1
  },
  {
      category: SkillCategory.BackEnd,
      name: TechStack.MSSQL,
      imgShieldUrl: "https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white",
      advancedLevel: 3
  },
  {
      category: SkillCategory.BackEnd,
      name: TechStack.MySQL,
      imgShieldUrl: "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
      advancedLevel: 2
  },
  {
      category: SkillCategory.FrontEnd,
      name: TechStack.HTML,
      imgShieldUrl: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      advancedLevel: 3
  },
  {
      category: SkillCategory.FrontEnd,
      name: TechStack.CSS,
      imgShieldUrl: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
      advancedLevel: 3
  },
  {
      category: SkillCategory.FrontEnd,
      name: TechStack.Javascript,
      imgShieldUrl: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white",
      advancedLevel: 3
  },
  {
      category: SkillCategory.FrontEnd,
      name: TechStack.Typescript,
      imgShieldUrl: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
      advancedLevel: 3
  },
  {
      category: SkillCategory.FrontEnd,
      name: TechStack.React,
      imgShieldUrl: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      advancedLevel: 2
  },
  {
      category: SkillCategory.FrontEnd,
      name: TechStack.Next,
      imgShieldUrl: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
      advancedLevel: 2
  },
  {
      category: SkillCategory.FrontEnd,
      name: TechStack.VueJS,
      imgShieldUrl: "https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D",
      advancedLevel: 3
  },
  {
      category: SkillCategory.FrontEnd,
      name: TechStack.Nuxt,
      imgShieldUrl: "https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82",
      advancedLevel: 3
  },
  {
      category: SkillCategory.DevOps,
      name: TechStack.Azure,
      imgShieldUrl: "https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white",
      advancedLevel: 2
  },
  {
      category: SkillCategory.DevOps,
      name: TechStack.AWS,
      imgShieldUrl: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
      advancedLevel: 2
  },
  {
      category: SkillCategory.Framework,
      name: TechStack.DotNet,
      imgShieldUrl: "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white",
      advancedLevel: 3
  },
  {
      category: SkillCategory.Framework,
      name: TechStack.Spring,
      imgShieldUrl: "https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white",
      advancedLevel: 1
  },
  {
      category: SkillCategory.Framework,
      name: TechStack.Bootstrap,
      imgShieldUrl: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
      advancedLevel: 3
  },
  {
      category: SkillCategory.Framework,
      name: TechStack.MUI,
      imgShieldUrl: "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white",
      advancedLevel: 3
  },
  {
      category: SkillCategory.Framework,
      name: TechStack.Vuetify,
      imgShieldUrl: "https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF",
      advancedLevel: 3
  },
  {
      category: SkillCategory.Workflow,
      name: TechStack.VisualStudio,
      imgShieldUrl: "https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white",
      advancedLevel: 3
  },
  {
      category: SkillCategory.Workflow,
      name: TechStack.VSCODE,
      imgShieldUrl: "https://camo.githubusercontent.com/400cd54f362c71a034b81df2145126a1b8ce94ecee21db04bd836ab5fc2e893f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5653253230436f64652d3030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d76697375616c2d73747564696f2d636f6465266c6f676f436f6c6f723d7768697465",
      advancedLevel: 3
  },
  {
      category: SkillCategory.Workflow,
      name: TechStack.INTELLIJIDEA,
      imgShieldUrl:"https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white",
      advancedLevel: 1
  },
  {
      category: SkillCategory.Workflow,
      name: TechStack.GIT,
      imgShieldUrl: "https://camo.githubusercontent.com/e51ce283337074d916f58ce83728fb4a26c8fdcc28adcd01a8a7afca0226459f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769742d4630353033322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974266c6f676f436f6c6f723d7768697465",
      advancedLevel: 3
  },
  {
      category: SkillCategory.Workflow,
      name: TechStack.GITHUB,
      imgShieldUrl: "https://camo.githubusercontent.com/cb501cb6971aff81421503d9b02fbc912c38eb3196e9f140ef7636ee366701b6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3138313731373f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465",
      advancedLevel: 3
  },
  {
      category: SkillCategory.Workflow,
      name: TechStack.BITBUCKET,
      imgShieldUrl: "https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white",
      advancedLevel: 3
  },
  {
      category: SkillCategory.Workflow,
      name: TechStack.SLACK,
      imgShieldUrl: "https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white",
      advancedLevel: 3
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user] = useState<User>(profile);
  const [experiences] = useState<Experience[]>(experiencesData);
  const [educations] = useState<Education[]>(educationsData);
  const [skills] = useState<Skill[]>(skillData);
  const [techStackImgMap, setTechStackImgMap] = useState<Map<TechStack, string>>();
  const [startDate] = useState<string>((new Date('2016-01-26').toISOString()));
  const [currentDate] = useState<string>((new Date().toISOString()));

  useEffect(() => {
    setIsLoading(true);
    var imgMap = new Map<TechStack, string>();

    skills.map((skill: Skill) => (
      imgMap.set(skill.name, skill.imgShieldUrl)
    ));

    setTechStackImgMap(imgMap);

    // fetch("/api/skill")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     var imgMap = new Map<TechStack, string>();

    //     skills.map((skill: Skill) => (
    //       imgMap.set(skill.name, skill.imgShieldUrl)
    //     ));

    //     setTechStackImgMap(imgMap);
    //   })

    // fetch("/api/user")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setUser(data);
    //   });

    // fetch("/api/skill")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setSkills(data);
    //   });

    // fetch("/api/experience")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setExperiences(data);
    //   });

    // fetch("/api/education")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setEducations(data);
    //   });

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <Container>
        {/* <Box sx={{ typography: 'body1' }} textAlign={"right"}>
          <Link href="/kr">KR</Link> / <Link href="/">ENG</Link>
        </Box> */}

        <Grid container alignContent={"center"}>
          <Grid item md={4} xs={12} textAlign="center">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="logo"
              />
            </Link>
          </Grid>
          <Grid item md={4} xs={12} textAlign="center">
              <Box sx={{ m:1 }}>
                <Typography>✉️ {user.email}</Typography>
              </Box>
              <Box sx={{ m:1 }}>
                <Typography>📞 {user.phone}</Typography>
              </Box>
          </Grid>
          <Grid item md={4} xs={12} textAlign="center">
              <Box sx={{ m:1 }} >
                <img src="https://img.icons8.com/fluency/20/null/github.png" />
                <Link href={user.github} target="_blank" title={user.github} style={{ textDecoration: 'none' }}>
                  GitHub
                </Link>
              </Box>
              <Box sx={{ m:1 }}>
                <img src="https://img.icons8.com/fluency/20/null/linkedin.png" />
                <Link href={user.linkedIn} target="_blank" title={user.linkedIn} style={{ textDecoration: 'none' }}>
                  LinkedIn
                </Link>
              </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography
              variant="h4"
              textTransform={"uppercase"}
              color="default"
              fontWeight={"bold"}
              textAlign="center"
            >
              SUMMARY
            </Typography>
            <div>
            A full-stack web developer with 6+ years of experience. I have been implementing a loan pipeline with LOS in Mortgage Finance Industry. In E-commerce, developed CRM, and WMS created invoices and technician schedule management applications. As a developer, I’m trying to optimize data with minimal time to develop software that reduces errors, is easier to manage, and is more efficient. I’m a fast learner who enjoys learning and challenging myself to maximize my ability.
            </div>
          </Grid>
          <Grid item md={6} xs={12} textAlign={{ xs: "center", md: "left" }}>
            <img src="https://img.shields.io/badge/version-v2022.11.22-blue"/>
          </Grid>
          <Grid item md={6} xs={12} textAlign={{ xs: "center", md: "right" }}>
            <div className="signature">{user?.fullName}</div>
          </Grid>
        </Grid>

        <Typography
          sx={{
            typography: "h4",
            color: "text.primary",
            fontWeight: "bold",
          }}
          align="center"
        >
          SKILLS
        </Typography>

        <Grid container spacing={2}>
          {
            Array.from(new Set(skills?.map(x => x.category))).map((category: SkillCategory) => (
              (
                <Grid item lg={4} xs={12} key={category}>
                  <Typography
                    color="secondary"
                    variant="h5"
                    fontWeight="bold"
                    align="center"
                  >
                    {category}
                  </Typography>
                  {
                    skills?.filter(x => x.category == category).map((skill: Skill) => (
                      <Box key={skill.name} sx={{ display: 'inline' }}>
                        <Chip sx={{ m: 0.5 }} color="primary" label={skill.name} variant={skill.advancedLevel == 3 ? "filled" : "outlined"} />
                      </Box>
                    ))
                  }
                </Grid>
              )
            ))
          }
        </Grid>
        <br />

        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography
              typography="h4"
              color="default"
              fontWeight="bold"
              align="center"
            >
              EXPERIENCES
            </Typography>
            <Stack direction={"row"} justifyContent="center">
              <Typography
                sx={{
                  color: "text.secondary",
                  fontWeight: "bold",
                }}
                align="center"
              >
                {moment(startDate).format('MM/DD/YYYY')} ~ {moment(currentDate).format('MM/DD/YYYY')} | {moment(currentDate).diff(moment(startDate), 'years')} years+
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {
          experiences?.map((experienceItem: Experience) => (
            <Grid container spacing={2} key={`experience-container-${experienceItem.companyName}`}>
              <Grid xs={12} item>
                <Link href={experienceItem.companyWebsite} target="_blank" style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      typography: "h6",
                      fontWeight: "bold",
                    }}
                    color="primary"
                    align="center"
                  >
                    {experienceItem.companyName}
                  </Typography>
                </Link>
                <Typography align="center">
                  {moment(experienceItem.startData).format('MMMM, YYYY')} ~ {moment(currentDate).diff(moment(experienceItem.endDate), 'days') == 0 ? 'Present' : moment(experienceItem.endDate).format('MMMM, YYYY')} | { moment(experienceItem.endDate).diff(moment(experienceItem.startData), 'years') } years+
                </Typography>
                <Typography align="center"><i>{experienceItem.location}</i></Typography>
              </Grid>
              <Grid xs={12} item>
                <ul style={{ margin: 0 }}>
                  {
                    experienceItem.descriptions.map((description: string) => (
                      <li key={description}>{description}</li>
                    ))
                  }
                  <div>
                    {
                      experienceItem.usedTechStacks.map((usedSkill: TechStack) => (
                        <Box sx={{ mr: 1, display: 'inline' }} key={`${experienceItem.companyName}-${usedSkill}`}>
                          <img src={techStackImgMap?.get(usedSkill)} />
                        </Box>
                      ))
                    }
                  </div>
                </ul>
              </Grid>
            </Grid>
          ))
        }

        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Typography
              typography="h4"
              color="default"
              fontWeight="bold"
              align="center"
            >
              EDUCATION
            </Typography>

            {
              educations?.map((education: Education) => (
                <Box>
                    <Typography align="center">{education.major}</Typography>
                    <Typography variant="h6" color={'primary'} align="center">{education.name}</Typography>
                    <Typography align="center">{education.startData} ~ {education.endDate}</Typography>
                    <Typography align="center">{education.location}</Typography>
                </Box>
              ))
            }
          </Grid>

          <Grid item md={6} xs={12}>
            <Typography
              typography="h4"
              color="default"
              fontWeight="bold"
              align="center"
            >
              SERVICE
            </Typography>
            <Box>
            <Typography align="center">Information Security</Typography>
            <Typography variant="h6" color={'primary'} align="center">Republic of Korea Army</Typography>
            <Typography align="center">{moment([2009, 2, 1]).format('MMMM, YYYY')} ~ {moment([2011, 4, 1]).format('MMMM, YYYY')}</Typography>
            <Typography align="center">Seoul, Republic of Korea</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-B67XXE017S"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-B67XXE017S');
        `}
      </Script>
    </div>
  );
}