import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

export default function ImgMediaCard(props) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        marginLeft: "10px",
        height: "80%",
      }}
    >
      <Typography gutterBottom variant="h5" component="div">
        Last User Create
      </Typography>
      <Avatar src={props.img} sx={{ width: 80, height: 80 }} />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {props.names}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.email}
        </Typography>
      </CardContent>
    </Card>
  );
}
