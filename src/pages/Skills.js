import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import SkillsCard from "../components/layouts/SkillsCard ";

import HtmlImg from "../components/assets/Image/skills/html.png";
import CssImg from "../components/assets/Image/skills/css.png";
import BootstrapImg from "../components/assets/Image/skills/bootstrap.png";
import GitImg from "../components/assets/Image/skills/git.png";
import GitHubImg from "../components/assets/Image/skills/github.png";
import JavascriptImg from "../components/assets/Image/skills/javascript.png";
import MongodbImg from "../components/assets/Image/skills/mongodb.png";
import NodeImg from "../components/assets/Image/skills/node.png";
import ReactImg from "../components/assets/Image/skills/react.png";
import ReduxImg from "../components/assets/Image/skills/redux.png";

const Skills = () => {
  const skillsItem = [
    {
      text: "HTML",
      img: HtmlImg,
      content: "contenido 1",
    },
    {
      text: "CSS",
      img: CssImg,
      content: "contenido 1",
    },
    {
      text: "Javascript",
      img: JavascriptImg,
      content: "contenido 1",
    },
    {
      text: "Bootstrap",
      img: BootstrapImg,
      content: "contenido 1",
    },
    {
      text: "React.js",
      img: ReactImg,
      content: "contenido 1",
    },
    {
      text: "Redux",
      img: ReduxImg,
      content: "contenido 1",
    },
    {
      text: "Git",
      img: GitImg,
      content: "contenido 1",
    },
    {
      text: "GitHub",
      img: GitHubImg,
      content: "contenido 1",
    },
    {
      text: "MongoDB",
      img: MongodbImg,
      content: "contenido 1",
    },
    {
      text: "Node.js",
      img: NodeImg,
      content: "contenido 1",
    },
  ];
  return (
    <>
      <Container>
        <Grid container spacing={2} justifyContent="center" sx={{ pb: 2 }}>
          <Grid item container justifyContent="center">
            <Typography
              variant="h4"
              color="text.secondary"
              sx={{ mb: { xs: 1, sm: 2 } }}
            >
              Skills
            </Typography>
          </Grid>
          {skillsItem.map((value, index) => (
            <Grid key={index} item xs={6} sm={4} md={3}>
              <SkillsCard value={value} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Skills;
