import React, { useEffect, useState } from "react";
import Script from 'next/script';
import moment from 'moment';
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

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [experiences, setExperiences] = useState<Experience[]>();
  const [educations, setEducations] = useState<Education[]>();
  const [skills, setSkills] = useState<Skill[]>();
  const [techStackImgMap, setTechStackImgMap] = useState<Map<TechStack, string>>();
  const [startDate, setStartDate] = useState<string>((new Date('2016-01-26').toISOString()));
  const [currentDate, setCurrentDate] = useState<string>((new Date().toISOString()));

  useEffect(() => {
    setIsLoading(true);

    fetch("/api/skill")
      .then((response) => response.json())
      .then((data) => {
        var imgMap = new Map<TechStack, string>();

        data.map((skill: Skill) => (
          imgMap.set(skill.name, skill.imgShieldUrl)
        ));
    
        setTechStackImgMap(imgMap);
      })

    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });

    fetch("/api/skill")
      .then((response) => response.json())
      .then((data) => {
        setSkills(data);
      });

    fetch("/api/experience")
      .then((response) => response.json())
      .then((data) => {
        setExperiences(data);
      });

    fetch("/api/education")
      .then((response) => response.json())
      .then((data) => {
        setEducations(data);
      });

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <Container>
        <Box sx={{ typography: 'body1' }} textAlign={"right"}>
          <Link href="/kr">KR</Link> / <Link href="/">ENG</Link>
        </Box>

        <Grid container spacing={2}>
          <Grid item md={4}>
            <Stack textAlign={"right"}>
              <div>
                <img
                  src="/images/logo.png"
                  alt="logo"
                  width="140"
                  height="auto"
                />
              </div>
              {user == null ? (
                <div>...Loading</div>
              ) : (
                <div>
                  <Box>
                    <Typography>✉️ {user.email}</Typography>
                  </Box>
                  <Box>
                    <Typography>📞 {user.phone}</Typography>
                  </Box>
                  <Box>
                    <Link href={user.github} target="_blank">
                      <img src="https://img.icons8.com/fluency/25/null/github.png" />
                      GitHub
                    </Link>
                  </Box>
                  <Box>
                    <Link href={user.linkedIn} target="_blank">
                      <img src="https://img.icons8.com/fluency/30/null/linkedin.png" />
                      Linked-In
                    </Link>
                  </Box>
                </div>
              )}
            </Stack>
          </Grid>
          <Grid item md={8}>
            <Typography
              variant="h4"
              textTransform={"uppercase"}
              color="default"
              fontWeight={"bold"}
            >
              SUMMARY
            </Typography>
            <div>
              A full-stack web developer with 6+ years of experience. I have been implementing a loan pipeline with LOS in Mortgage Finance Industry. In E-commerce, developed CRM, WMS, created invoices and technician schedule management application. As a developer, I’m trying to optimize data with minimal time to develop software that reduces an error, easier to manage, and more efficient. I’m a fast-learner who enjoy to learn and challenge myself to maximize my ability.
            </div>
            <Stack textAlign={"right"}>
              <div>Lastest Updated: <b>11/18/2022</b></div>
              <div className="signature">{user?.fullName}</div>
            </Stack>
          </Grid>
        </Grid>

        {/* <Moment format="MM/DD/YYYY">{new Date()}</Moment> */}

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
                <Grid item lg={4} key={category}>
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
                        <Chip sx={{ m: 0.5 }} color="primary" label={skill.name} variant="outlined" />
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
                { moment(startDate).format('MM/DD/YYYY') } ~ { moment(currentDate).format('MM/DD/YYYY') } | { moment(currentDate).diff(moment(startDate), 'years') } years+
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {
          experiences?.map((experienceItem: Experience) => (
            <Grid container spacing={2} key={`experience-container-${experienceItem.companyName}`}>
              <Grid md={4} item>
                <Link href={experienceItem.companyWebsite} target="_blank">
                  <Typography
                    sx={{
                      typography: "h6",
                      fontWeight: "bold",
                    }}
                    color="primary"
                    align="right"
                  >
                    {experienceItem.companyName}
                  </Typography>
                </Link>
                <Typography align="right">
                  { moment(experienceItem.startData).format('MMMM, YYYY') } ~ { moment(currentDate).diff(moment(experienceItem.endDate), 'days') == 0 ? 'Present' : moment(experienceItem.endDate).format('MMMM, YYYY') }
                </Typography>
                <Typography align="right"><i>{experienceItem.location}</i></Typography>
              </Grid>
              <Grid md={8} item>
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
          <Grid item md={12}>
            <Typography
              typography="h4"
              color="default"
              fontWeight="bold"
              align="center"
            >
              EDUCATION
            </Typography>
          </Grid>
        </Grid>

        {
          educations?.map((education: Education) => (
            <Grid container spacing={2} key={`education-${education.name}`}>
              <Grid item md={12}>
                <Typography align="center">{ education.major }</Typography>
                <Typography variant="h6" color={'primary'} align="center">{ education.name }</Typography>
                <Typography align="center">{ education.startData } ~ { education.endDate }</Typography>
                <Typography align="center">{ education.location }</Typography>
              </Grid>
            </Grid>
          ))
        }

        <br />

        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography
              typography="h4"
              color="default"
              fontWeight="bold"
              align="center"
            >
              SERVICE
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography align="center">Information Security</Typography>
            <Typography variant="h6" color={'primary'} align="center">Republic of Korea Army</Typography>
            <Typography align="center">May 2009 ~ March 2011</Typography>
            <Typography align="center">Seoul, Republic of Korea</Typography>
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