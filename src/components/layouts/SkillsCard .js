import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SkillsCard = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card
      sx={{
        maxWidth: 345,
        "& .MuiCardMedia-root": {
          objectFit: "scale-down",
        },
      }}
      elevation={1}
    >
      <CardMedia
        component="img"
        height="140"
        image={props.value.img}
        alt="portafolio"
      />
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography gutterBottom variant="h6" component="div">
          {props.value.text}
        </Typography>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{
            transform: `${!expanded ? "rotate(0deg)" : "rotate(180deg)"}`,
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
      <Collapse in={expanded} timeout="auto">
        <CardContent>
          <Typography paragraph>{props.value.content}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default SkillsCard;
