import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import PortafolioCard from "../components/layouts/PortafolioCard";
import HtmlImg from "../components/assets/Image/skills/html.png";
import CssImg from "../components/assets/Image/skills/css.png";
import BootstrapImg from "../components/assets/Image/skills/bootstrap.png";

const Portafolio = () => {
  const webItems = [
    {
      title: "Web 1",
      sitio: "https://www.google.com",
      image: HtmlImg,
      content: "Este un sitio web desarrollador en Node.js",
    },
    {
      title: "Web 2",
      sitio: "https://www.youtube.com",
      image: CssImg,
      content: "Este un sitio web desarrollador en React.js",
    },
    {
      title: "Web 3",
      sitio: "https://www.facebook.com",
      image: BootstrapImg,
      content: "Este un sitio web desarrollador en React.js",
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
              Portafolio
            </Typography>
          </Grid>
          {webItems.map((value, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <PortafolioCard value={value} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Portafolio;
