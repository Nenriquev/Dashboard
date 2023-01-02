import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export default function CardTotalUsers(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Total Users
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <PersonIcon fontSize="large" /> {props.number}
        </Typography>
      </CardContent>
    </Card>
  );
}
