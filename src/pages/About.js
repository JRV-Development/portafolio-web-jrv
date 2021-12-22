import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const Skills = () => {
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
              About Me
            </Typography>
          </Grid>
          <Grid item>
            <Container>
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <Box></Box>
                <Box sx={{ textAlign: "justify" }}>
                  <Typography paragraph>
                    Desarrollador Full-Stack, listo para aprender nuevos
                    lenguajes y mejorar las habilidades obtenidas.
                  </Typography>
                  <Typography paragraph>
                    Actualmente trabajo de forma remota e independiente, creando
                    sitios web receptivos con diferentes funcionalidades.
                    Siempre trato de poner mi mejor esfuerzo y dedicación en
                    todo lo que desarrollo con una disponibilidad para colaborar
                    y/o trabajar en grupo. Mi objetivo es crecer y adquirir
                    todos los conocimientos necesarios para ser un buen
                    profesional.
                  </Typography>
                  <Typography paragraph>
                    Siempre trato de poner mi mejor esfuerzo y dedicación en
                    todo lo que desarrollo con una disponibilidad para colaborar
                    y/o trabajar en grupo. Mi objetivo es crecer y adquirir
                    todos los conocimientos necesarios para ser un buen
                    profesional.
                  </Typography>
                  <Typography paragraph>
                    Mi objetivo es crecer y adquirir todos los conocimientos
                    necesarios para ser un buen profesional.
                  </Typography>
                  <Box
                    sx={{
                      textAlign: "center",
                      "& .MuiButton-root:hover": {
                        backgroundColor: "#fff",
                        color: "primary.main",
                      },
                    }}
                  >
                    <Button variant="contained" disableElevation>
                      Descargar CV
                    </Button>
                  </Box>
                </Box>
                <Box></Box>
              </Stack>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Skills;
