import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";

const PortafolioCard = (props) => {
  return (
    <Card
      sx={{
        maxWidth: 350,
        "& .MuiCardMedia-root": {
          objectFit: "scale-down",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={props.value.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.value.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.value.content}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          "& .MuiButton-root:hover": {
            color: "#fff",
            backgroundColor: "primary.main",
          },
        }}
      >
        <Button
          variant="outlined"
          size="small"
          color="primary"
          endIcon={<PreviewIcon />}
          component="a"
          href={props.value.sitio}
          target="_blank"
        >
          Visitar Web
        </Button>
      </CardActions>
    </Card>
  );
};

export default PortafolioCard;
