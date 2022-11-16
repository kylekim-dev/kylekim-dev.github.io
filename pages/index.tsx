import React, { useEffect, useState } from "react";
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
import { SkillCategory } from "../types";
// import { Category } from "@mui/icons-material";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [skills, setSkills] = useState<Skill[]>();

  useEffect(() => {
    setIsLoading(true);
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
                  width="170"
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
                      <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
                    </Link>
                  </Box>
                  <Box>
                    <Link href={user.linkedIn} target="_blank">
                      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
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
            Software Engineer with 6+ years of experience facilitating cutting-edge engineering solutions with a wide range of e-commerce application and technology skills. Familiar with modernized responsive web and REST API development. 
            //Software Engineer with 6+ years of experience facilitating cutting-edge engineering solutions with a wide range of e-commerce application and technology skills. Familiar with modernized responsive web and REST API development. 
            </div>
            <Stack textAlign={"right"}>
              <div>Lastest Updated: <b>11/18/2022</b></div>
              <div className="signature">{user?.fullName}</div>
            </Stack>
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

        {
          Array.from(new Set(skills?.map(x => x.category))).map((category: SkillCategory) => (
            (
              <Grid container spacing={4}>
                <Grid item md={2} >
                  <Typography
                    key={`Skill-Category-${category}`} 
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
                    <Box sx={{ mx: 1, display: 'inline' }}><img key={`skill-${item.imgShieldUrl}`} src={item.imgShieldUrl} alt={`kyle-skill-${item.imgShieldUrl}`} title={item.name} /></Box>
                  ))}
                </Grid>
              </Grid>
            )
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
                01/01/2001 ~ 12/31/2022
              </Typography>
              <Chip
                color="default"
                label="1y 2m"
                sx={{ borderRadius: "5px" }}
                size="small"
              />
            </Stack>
          </Grid>
          <Grid md={4} item>
            <Typography
              sx={{
                typography: "h6",
                color: "text.secondary",
                fontWeight: "bold",
              }}
              align="right"
            >
              Title Title Title
            </Typography>
            <Typography align="right">Sub Title</Typography>
            <Typography align="right">
              November, 2020 ~ November, 2022
            </Typography>
            <Stack direction="row" justifyContent="flex-end">
              <Chip
                color="primary"
                label="Current"
                sx={{ borderRadius: "5px" }}
                size="small"
                style={{ maxWidth: 100 }}
              />
              <Chip
                color="info"
                label="Current"
                sx={{ borderRadius: "5px" }}
                size="small"
                style={{ maxWidth: 100 }}
              />
            </Stack>
          </Grid>
          <Grid md={8} item>
            <ul style={{ margin: 0 }}>
              <li>Lorem Ipsum is simply dummy text</li>
              <li>Lorem Ipsum is simply dummy text</li>
              <li>Lorem Ipsum is simply dummy text</li>
              <li>Lorem Ipsum is simply dummy text</li>
              <li>Lorem Ipsum is simply dummy text</li>
              <li>
                <Typography
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Lorem Ipsum
                </Typography>
                <Stack direction={"row"}>
                  <Chip
                    color="default"
                    label="Current"
                    sx={{ borderRadius: "5px" }}
                    size="small"
                  />
                  <Chip
                    color="default"
                    label="Current"
                    sx={{ borderRadius: "5px" }}
                    size="small"
                  />
                  <Chip
                    color="default"
                    label="Current"
                    sx={{ borderRadius: "5px" }}
                    size="small"
                  />
                  <Chip
                    color="default"
                    label="Current"
                    sx={{ borderRadius: "5px" }}
                    size="small"
                  />
                </Stack>
              </li>
            </ul>
          </Grid>
          <Grid md={4} item>
            <Typography
              sx={{
                typography: "h6",
                color: "text.secondary",
                fontWeight: "bold",
              }}
              align="right"
            >
              Title Title Title
            </Typography>
            <Typography align="right">Sub Title</Typography>
            <Typography align="right">
              November, 2020 ~ November, 2022
            </Typography>
            <Stack direction="row" justifyContent="flex-end">
              <Chip
                color="primary"
                label="Current"
                sx={{ borderRadius: "5px" }}
                size="small"
                style={{ maxWidth: 100 }}
              />
              <Chip
                color="info"
                label="Current"
                sx={{ borderRadius: "5px" }}
                size="small"
                style={{ maxWidth: 100 }}
              />
            </Stack>
          </Grid>
          <Grid md={8} item>
            <ul style={{ margin: 0 }}>
              <li>Lorem Ipsum is simply dummy text</li>
              <li>Lorem Ipsum is simply dummy text</li>
              <li>Lorem Ipsum is simply dummy text</li>
              <li>Lorem Ipsum is simply dummy text</li>
              <li>Lorem Ipsum is simply dummy text</li>
              <li>
                <Typography
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Lorem Ipsum
                </Typography>
                <Stack direction={"row"}>
                  <Chip
                    color="default"
                    label="Current"
                    sx={{ borderRadius: "5px" }}
                    size="small"
                  />
                  <Chip
                    color="default"
                    label="Current"
                    sx={{ borderRadius: "5px" }}
                    size="small"
                  />
                  <Chip
                    color="default"
                    label="Current"
                    sx={{ borderRadius: "5px" }}
                    size="small"
                  />
                  <Chip
                    color="default"
                    label="Current"
                    sx={{ borderRadius: "5px" }}
                    size="small"
                  />
                </Stack>
              </li>
            </ul>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item md={4}>
            <Typography
              sx={{
                typography: "h4",
                color: "text.secondary",
                fontWeight: "bold",
              }}
              align="right"
            >
              Section3
            </Typography>
            <Stack direction={"row"} justifyContent="flex-end">
              <Typography
                sx={{
                  color: "text.secondary",
                  fontWeight: "bold",
                }}
                align="right"
              >
                01/01/2001 ~ 12/31/2022
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={8}></Grid>
          <Grid item md={4}>
            <Typography align="right">Lorem Ipsum</Typography>
          </Grid>
          <Grid item md={8}>
            <Chip label="Lorem Ipsum" color="primary" />
            <Chip label="Lorem Ipsum" color="primary" />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item md={4}>
            <Typography
              sx={{
                typography: "h4",
                color: "text.secondary",
                fontWeight: "bold",
              }}
              align="right"
            >
              Section4
            </Typography>
            <Stack direction={"row"} justifyContent="flex-end">
              <Typography
                sx={{
                  color: "text.secondary",
                  fontWeight: "bold",
                }}
                align="right"
              >
                01/01/2001 ~ 12/31/2022
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={8}></Grid>
          <Grid item md={4}>
            <Typography align="right">Lorem Ipsum</Typography>
          </Grid>
          <Grid item md={8}>
            <Chip label="Lorem Ipsum" color="primary" />
            <Chip label="Lorem Ipsum" color="primary" />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item md={4}>
            <Typography
              sx={{
                typography: "h4",
                color: "text.secondary",
                fontWeight: "bold",
              }}
              align="right"
            >
              Section5
            </Typography>
          </Grid>
          <Grid item md={8}></Grid>
          {/* {Array.from({ length: 12 }, (_, i) => (
            <Grid item md={3}>
              <Card>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Word of the Day
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))} */}
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