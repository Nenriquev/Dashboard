import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardTotalProducts(props) {
  return (
    <Card sx={{width:"30%",  boxShadow: '1px 6px 10px 4px rgb(0 0 0 / 60%)', marginBottom:"25px"}} className='card'>
      <CardContent>
        <Typography gutterBottom fontFamily={'Console'} variant="h5" component="div" sx={{textShadow: '0px 0px 0, 1px 2px 2px #5e1b88'}}>
          Categories
        </Typography>
        <Typography
          variant="h5"
          color="white"
          sx={{ display: "flex", alignItems: "center" , fontSize:"20px", textAlign:"left"}}
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
          Alcoholes: {props.alcohol}
          <br />
          Postres: {props.postres}
        </Typography>
      </CardContent>
    </Card>
  );
}
