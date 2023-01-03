import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardTotalProducts(props) {
  return (
    <Card sx={{ maxWidth: 345, marginLeft: "10px" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Categories
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ display: "flex", alignItems: "center" , fontSize:"20px"}}
        >
          Pizzas: {props.pizzas}
          <br />
          Quesos: {props.quesos}
          <br />
          Vegetales: {props.vegetales}
          <br />
          Carnes: {props.carnes}
          <br />
          Bebidas: {props.bebidas}
          <br />
          Alcholes: {props.alcohol}
          <br />
          Postres: {props.postres}
        </Typography>
      </CardContent>
    </Card>
  );
}
