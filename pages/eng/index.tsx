import React, { useEffect, useState } from "react";
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
import { Skill } from "../../types";
import { User } from "../../types";

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function ENG() {
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
        <Link href="/kr">KR</Link> / <Link href="/eng">ENG</Link>
      </Box>

        <Grid container spacing={2}>
          <Grid item md={4}>
            <Stack textAlign={"right"}>
              <div>
                <img
                  src="/images/logo3.png"
                  alt="logo"
                  width="200"
                  height="auto"
                />
              </div>
              {user == null ? (
                <div>...Loading</div>
              ) : (
                <div>
                  <div>Email: {user.email}</div>
                  <div>Phone: {user.phone}</div>
                  <div>GitHub: {user.github}</div>
                  <div>Address: {user.linkedIn}</div>
                </div>
              )}
            </Stack>
          </Grid>
          <Grid item md={8}>
            <Box
              sx={{
                typography: "h4",
                textTransform: "uppercase",
                color: "text.secondary",
                fontWeight: "bold",
              }}
            >
              Title
            </Box>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <br />
            <Stack textAlign={"right"}>
              <div>Lastest Updated: 11/11/2022</div>
              <div className="signature">New Wave Lending</div>
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography
              sx={{
                typography: "h4",
                color: "text.secondary",
                fontWeight: "bold",
              }}
              align="center"
            >
              Section1
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography align="right">Lorem Ipsum</Typography>
          </Grid>
          <Grid item md={8}>
            {skills?.map((skill: Skill, index: number) => (
              <Chip
                key={`skill-${index}`}
                label={`${skill.name}`}
                color="primary"
              />
            ))}
          </Grid>
          <Grid item md={4}>
            <Typography align="right">Lorem Ipsum</Typography>
          </Grid>
          <Grid item md={8}>
            <Chip label="Lorem Ipsum" color="primary" />
            <Chip label="Lorem Ipsum" color="primary" />
            <Chip label="Lorem Ipsum" color="primary" />
          </Grid>
          <Grid item md={4}>
            <Typography align="right">Lorem Ipsum</Typography>
          </Grid>
          <Grid item md={8}>
            <Chip label="Lorem Ipsum" color="primary" />
            <Chip label="Lorem Ipsum" color="primary" />
            <Chip label="Lorem Ipsum" color="primary" />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography
              sx={{
                typography: "h4",
                color: "text.secondary",
                fontWeight: "bold",
              }}
              align="center"
            >
              Section2
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
    </div>
  );
}
