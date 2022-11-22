import React, { useEffect, useState } from "react";
import Script from 'next/script';
import * as moment from 'moment';
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
import { ImgShieldUrlMap } from "../types";
import { TechStack } from "../types";
// import { Category } from "@mui/icons-material";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [experiences, setExperiences] = useState<Experience[]>();
  const [educations, setEducations] = useState<Education[]>();
  const [skills, setSkills] = useState<Skill[]>();
  const [imgShildMap, setImgShildMap] = useState<ImgShieldUrlMap[]>();

  useEffect(() => {
    setIsLoading(true);

    fetch("/api/imgShildMap")
      .then((response) => response.json())
      .then((data) => {
        setImgShildMap(data);
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

        {
          Array.from(new Set(skills?.map(x => x.category))).map((category: SkillCategory) => (
            (
              <Grid container spacing={4} key={category}>
                <Grid item md={2} >
                  <Typography
                    color="secondary"
                    variant="h5"
                    fontWeight="bold"
                    align="right"
                  >
                    {category}
                  </Typography>
                </Grid>
                <Grid item md={10}>
                  {skills?.filter(x => x.category == category).map((item: Skill) => (
                    <Box key={item.imgShieldUrl} sx={{ mx: 1, display: 'inline' }}><img src={item.imgShieldUrl} alt={`kyle-skill-${item.imgShieldUrl}`} title={item.name} /></Box>
                  ))}
                </Grid>
              </Grid>
            )
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
                11/11/1111 ~ 22/22/2222
                {/* { moment() } */}
                {/* <Moment format="MM/DD/YYYY">2016-01-25</Moment> ~ <Moment format="MM/DD/YYYY">{ moment() }</Moment> (<Moment toNow>1976-04-19T12:59-0500</Moment>) */}
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {
          experiences?.map((experienceItem: Experience) => (
            <Grid container spacing={2} key={`experience-container-${experienceItem.companyName}`}>
              <Grid md={4} item>
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
                <Typography align="right">
                  {experienceItem.startData} ~ {experienceItem.endDate}
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
                </ul>
                {
                  experienceItem.usedTechStacks.map((usedSkill: TechStack) => (
                    <span key={`${experienceItem.companyName}-${usedSkill}`}>{usedSkill} // </span>
                  ))
                }
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

        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography align="center">Republic of Korea Army</Typography>
            <Typography align="center">Information Security</Typography>
            <Typography align="center">May 2009 ~ March 2011</Typography>
            <Typography align="center">Seoul, Republic of Korea</Typography>
          </Grid>
        </Grid>

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
            <Typography align="center">Republic of Korea Army</Typography>
            <Typography align="center">Information Security</Typography>
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