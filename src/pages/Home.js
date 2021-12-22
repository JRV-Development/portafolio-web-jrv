import React from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import Avatar1 from "../components/assets/Image/avatar.jpg";

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    width: 220,
    height: "auto",
  },
  [theme.breakpoints.up("md")]: { maxWidth: 300 },
}));
const BoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    height: "75vh",
  },
  [theme.breakpoints.up("sm")]: {
    height: "60vh",
  },
}));

const Home = () => {
  return (
    <BoxStyled sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid
              item
              container
              direction="column"
              justifyContent="space-evenly"
              alignItems="flex-end"
              xs={2}
              md={6}
            >
              <IconButton
                component="a"
                href="https://github.com/"
                target="_blank"
              >
                <GitHubIcon fontSize="large" color="primary.main" />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/jesus-requelme-2268931b1/"
                target="_blank"
              >
                <LinkedInIcon fontSize="large" color="primary.main" />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.facebook.com/jesus.rekelme.vilca.25"
                target="_blank"
              >
                <FacebookIcon fontSize="large" color="primary.main" />
              </IconButton>
            </Grid>
            <Grid item container xs={10} md={6} justifyContent="center">
              <AvatarStyled
                alt="Remy Sharp"
                src={Avatar1}
                sx={{ width: "100%", height: "auto", maxWidth: 300 }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Grid item sx={{ textAlign: "center", mr: 2 }} xs={12}>
            <Typography variant="h4">Full Stack</Typography>
            <Typography gutterBottom variant="h5">
              Web Developer
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              sx={{ py: 2, mr: 2, textAlign: "justify" }}
            >
              Es un hecho establecido hace demasiado tiempo que un lector se
              distraerá con el contenido del texto de un sitio mientras que mira
              su diseño.
            </Typography>
          </Grid>
          <Grid item container justifyContent="center">
            <Button variant="contained" color="info">
              Portafolio
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </BoxStyled>
  );
};

export default Home;
