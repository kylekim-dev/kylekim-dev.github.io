import React, { useEffect, useState } from "react";
import moment from 'moment';
import Script from 'next/script';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import { Skill } from "../types";
import { User } from "../types";
import { Experience } from "../types";
import { Education } from "../types";
import { SkillCategory } from "../types";
import { TechStack } from "../types";
import { Website } from "../types";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { link } from "fs";
// import { Category } from "@mui/icons-material";

const profile: User = {
  fullName: "Kyle Kim",
  email: "kylegoforit@gmail.com",
  phone: "(949) 447-4494",
  github: "https://github.com/kylekim-dev",
  linkedIn: "https://www.linkedin.com/in/kylekim-dev",
};

const experiencesData: Experience[] = [
  {
    displayOrder: 1,
    companyName: "New Wave Lending Group",
    title: "Software Engineer",
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
      "Worked on Back-end and Front-end tasks to implement LOS utilizing C#, MS-SQL, Vue.js and Typescript.",
      "Created Loan Origination System that has 20K+ mortgage loan pipeline, and 1k+ active users, and developed the web application and the REST APIs.",
      "Developed an automatic generation module of disclosure documents based on loan data to improve efficiency, accuracy, and reliability.",
      "Designed module to send disclosure documents through the DocuSign API and improved work efficiency by 20%.",
      "Creating automatic document indexing modules using barcodes, increased efficiency of document categorization works by 60%.",
      "Programmed the loan eligibility assessment, Reduces the overall mortgage loan process time by 50%.",
    ]
  },
  {
    displayOrder: 2,
    companyName: "AmWest Funding",
    title: "Software Engineer",
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
      "Worked on Back-end and Front-end projects to implement LOS utilizing C#, .NET and MS-SQL.",
      "Developed a credit report analysis module to verify mortgage loan eligibility, and Designed to automatically import liabilities (credit cards, other depts) to reduce simple data entry works hours..",
      "Developed web applications and REST APIs for in-house job posting and employee onboarding management.",
      "Worked on migrating informatica mappings between environments for development, testing and production implementation purposes.",
      "Developed automatic closing fee recommendation, reduced average loan registration time by 10%.",
    ]
  },
  {
    displayOrder: 3,
    companyName: "Bada International",
    title: "Junior Web Developer",
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
      "Created e-commerce sites integrated with PayPal, Strip and Authorize.net.",
      "Developed water purifiers management web application that can manage account rights and customer resource.",
      "Designed in-house water purifier and filter inventory management system.",
      "Increase work accuracy and efficiency by 10% through the development of an automated maintenance service scheduler module.",
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

const websitesData: Website[] = [
  {
    name: "ChungHo USA",
    link: "http://www.chunghousa.com",
    banner: "https://source.unsplash.com/random/200x200?sig=1",
    description: ""
  },
  {
    name: "Simply Pure Baseball",
    link: "https://www.simplypurebaseball.com",
    banner: "https://source.unsplash.com/random/200x200?sig=2",
    description: ""
  },
  {
    name: "Bada Pro",
    link: "http://badapro.com/",
    banner: "https://source.unsplash.com/random/200x200?sig=3",
    description: ""
  },
  {
    name: "AmWest Funding",
    link: "https://www.amwestfunding.com",
    banner: "https://source.unsplash.com/random/200x200?sig=4",
    description: ""
  },
  {
    name: "AmWest Wholesale",
    link: "https://amwestwholesale.com",
    banner: "https://source.unsplash.com/random/200x200?sig=5",
    description: ""
  },
  {
    name: "New Wave Lending",
    link: "https://www.newwavelending.com",
    banner: "https://source.unsplash.com/random/200x200?sig=6",
    description: ""
  },
  {
    name: "New Wave Leding LOS System",
    link: "https://partner.newwavelending.com",
    banner: "https://source.unsplash.com/random/200x200?sig=7",
    description: ""
  },
  {
    name: "New Wave Lending Intranet",
    link: "https://intranet.newwavelending.com",
    banner: "https://source.unsplash.com/random/200x200?sig=8",
    description: ""
  },
  {
    name: "New Wave Lending RESTful API",
    link: "https://partnercoreapi.newwavelending.com/swagger/index.html",
    banner: "https://source.unsplash.com/random/200x200?sig=9",
    description: ""
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
    imgShieldUrl: "https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white",
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
  const [websites] = useState<Website[]>(websitesData);
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

        <Grid container alignContent={"center"} spacing={2}>
          <Grid item md={4} xs={12}>
            <Card sx={{ minWidth: 100 }}>
              <CardContent>
                <Stack>
                  <Link href="/">
                    <img
                      src="/images/logo.png"
                      alt="logo"
                    />
                  </Link>
                  <Link sx={{ mb: 1 }} href={`mailto:${user.email}`} style={{ textDecoration: 'none' }}>✉️ {user.email}</Link>
                  <Link sx={{ mb: 1 }} href={`tel:${user.phone}`} style={{ textDecoration: 'none' }}>📞 {user.phone}</Link>
                  <Stack sx={{ mb: 1 }} direction={'row'} spacing={1}>
                    <img src="https://img.icons8.com/fluency/22/null/github.png" width={22} height={22} />
                    <Link href={user.github} target="_blank" title={user.github} style={{ textDecoration: 'none' }}>GitHub</Link>
                  </Stack>
                  <Stack sx={{ mb: 1 }} direction={'row'} spacing={1}>
                    <img src="https://img.icons8.com/color/22/null/microsoft-word-2019--v2.png" width={22} height={22} />
                    <Link href={`/docs/Software-Developer-Resume-KyleKim.docx`} target="_blank" title={`Software-Developer-Resume-KyleKim.docx`} style={{ textDecoration: 'none' }} download>
                      Resume
                    </Link>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          {/* <Grid item md={4} xs={12} textAlign="center">
            <div className="badge-base LI-profile-badge" data-locale="ko_KR" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="kylekim-dev" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/kylekim-dev?trk=profile-badge"></a></div>
          </Grid> */}
          <Grid item md={4} xs={12}>
            <Card sx={{ minWidth: 100 }}>
              <CardContent>
                <Typography
                  typography="h4"
                  color="default"
                  fontWeight="bold"
                >
                  SKILLS
                </Typography>
                <ul>
                  <li>C# (.NET)</li>
                  <li>MS-SQL</li>
                  <li>JavaScript / TypeScript</li>
                  <li>HTML5 / CSS3</li>
                  <li>React / Vue.js</li>
                  <li>AWS</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography
              variant="h4"
              textTransform={"uppercase"}
              color="default"
              fontWeight={"bold"}
            >
              SUMMARY
            </Typography>
            <Divider />
            <div>
              I am a Full-Stack developer for over 6 years. I have experienced in Financial Institute and E-commerce.
              In E-Commerce, I have experienced in developing CRM, WMS included inventory system, Filter management System, Technician Scheduling system, Automated invoicing system, API with payment systems(Stripe, PayPal, and Athorized.net) and 10+ responsive B2B & B2C website.
              In Financial Institute, I have experienced in developing LOS, Pipeline, and Intranet.
              I like the excitement of working in a faced paced environment and am very adaptable to change. I am always maintaining a positive and solution oriented approach and an active listener with the ability to focus on the requirements. As a team member, I bring strong git workflow practices and experience sing agile to build software in a collaborative environment.
            </div>
          </Grid>
          <Grid item md={6} xs={12} textAlign={{ xs: "center", md: "left" }}>
            <img src="https://img.shields.io/badge/version-v2022.11.22-blue" />
          </Grid>
          <Grid item md={6} xs={12} textAlign={{ xs: "center", md: "right" }}>
            <div className="signature">{user?.fullName}</div>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Typography
              typography="h4"
              color="default"
              fontWeight="bold"
            >
              EDUCATION
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Stack direction={'row'} justifyContent="space-between" alignItems="flex-end" spacing={2}>
              <Typography
                sx={{
                  typography: "h5",
                  fontWeight: "bold",
                }}
                align="center"
              >
                Korea Aerospace University
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontWeight: "bold",
                }}
                align="center"
              >
                Class of 2015
              </Typography>
            </Stack>
            <Typography>B.S. in Computer Science</Typography>
            <Typography><b>Related coursework:</b>  Data Structure | Operating Systems | Embedded System Design | Multimedia Engineering.</Typography>
          </Grid>
        </Grid>

        {/* <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography
              sx={{
                typography: "h4",
                color: "text.primary",
                fontWeight: "bold",
              }}
            >
              SKILLS
            </Typography>
            <Divider />
          </Grid>
        </Grid>
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
        </Grid> */}
        <br />

        <Grid container spacing={2}>
          <Grid item md={12}>
            <Stack direction={'row'} justifyContent="space-between" alignItems="flex-end" spacing={2}>
              <Typography
                typography="h4"
                color="default"
                fontWeight="bold"
                align="left"
              >
                EXPERIENCES
              </Typography>
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

            <Divider />
          </Grid>
        </Grid>

        {
          experiences?.map((experienceItem: Experience) => (
            <Grid container spacing={2} key={`experience-container-${experienceItem.companyName}`}>
              <Grid xs={12} item>
                <Stack direction={'row'} justifyContent="space-between" alignItems="flex-end" spacing={2}>
                  <Link href={experienceItem.companyWebsite} target="_blank" style={{ textDecoration: 'none' }}>
                    <Typography
                      sx={{
                        typography: "h6",
                        fontWeight: "bold",
                      }}
                      align="center"
                    >
                      {experienceItem.title} | {experienceItem.companyName} - {experienceItem.location}
                    </Typography>
                  </Link>
                  <Typography
                    sx={{
                      color: "text.secondary",
                    }}
                    align="center"
                  >
                    {moment(experienceItem.startData).format('MMMM, YYYY')} ~ {moment(currentDate).diff(moment(experienceItem.endDate), 'days') == 0 ? 'Present' : moment(experienceItem.endDate).format('MMMM, YYYY')} | {moment(experienceItem.endDate).diff(moment(experienceItem.startData), 'years')} years+
                  </Typography>
                </Stack>
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



        {/* <Grid container spacing={2}>

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
        </Grid> */}

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              typography="h4"
              color="default"
              fontWeight="bold"
              align="center"
            >
              WORKS
            </Typography>
            <Divider />
          </Grid>
            {
              websites?.map((website: Website, index: number) => (
                <Grid item md={3} xs={12}  key={`website-${website.name}-${index}`}>

              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={website.banner}
                    alt={website.link}
                  />
                  <CardContent>
                    <Typography gutterBottom fontWeight={'bold'} component="div">
                      { website.name }
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button style={{ marginLeft: "auto" }} href={website.link} target="_blank" size="small" color="primary" variant="contained" disableElevation>
                      Learn More
                    </Button>
                </CardActions>
              </Card>
                </Grid>
              ))
            }
        </Grid>
        <br />
        <br />
        <br />
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