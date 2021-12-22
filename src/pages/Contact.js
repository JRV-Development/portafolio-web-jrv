import * as React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SendIcon from "@mui/icons-material/Send";

const iconItems = [
  {
    text: "+51 966487015",
    icon: <WhatsAppIcon sx={{ fontSize: 35 }} />,
  },
  {
    text: "rejesus2908@gmail.com",
    icon: <EmailIcon sx={{ fontSize: 35 }} />,
  },
];

const Contact = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item container justifyContent="center">
            <Typography
              variant="h4"
              color="text.secondary"
              sx={{ mb: { xs: 1, sm: 2 } }}
            >
              Contact Me
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" xs={12} sm={6}>
            <Box>
              {iconItems.map((value, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    margin: "10px",
                  }}
                >
                  <IconButton
                    color="info"
                    sx={{
                      "&:hover": {
                        backgroundColor: "info.main",
                        color: "#fff",
                      },
                    }}
                  >
                    {value.icon}
                  </IconButton>
                  <Typography variant="h6" sx={{ mx: 1 }} color="text.primary">
                    {value.text}
                  </Typography>
                </div>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { my: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  label="Nombre"
                  sx={{
                    width: { xs: "100%", md: "null" },
                    maxWidth: { xs: "52ch", md: "25ch" },
                    mr: 1,
                  }}
                />
                <TextField
                  label="Numero Telefonico"
                  sx={{
                    width: { xs: "100%", md: "null" },
                    maxWidth: { xs: "52ch", md: "25ch" },
                  }}
                />
              </div>
              <div>
                <TextField
                  label="Correo Electronico"
                  fullWidth
                  sx={{ width: "100%", maxWidth: "52ch" }}
                />
                <TextField
                  label="Cuenta sobre el Proyecto"
                  fullWidth
                  sx={{ width: "100%", maxWidth: "52ch" }}
                  multiline
                  rows={4}
                />
              </div>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="contained" endIcon={<SendIcon />} color="info">
                  Send
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
