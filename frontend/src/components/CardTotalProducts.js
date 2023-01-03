import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";

export default function CardTotalProducts(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Total Products
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <LocalPizzaIcon fontSize="large" /> {props.number}
        </Typography>
      </CardContent>
    </Card>
  );
}
