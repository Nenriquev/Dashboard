import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function CardProductsList(props) {
  return (
    <>
    <Card className="card" sx={{  margin: "20px", width:"20%", boxShadow: '1px 6px 10px 4px rgb(0 0 0 / 60%)' }}>
      <CardContent>
        <Typography
          variant="h5"
          color="white"
          sx={{ display: "flex", alignItems: "center", flexDirection:"column",fontSize:"18px" , textTransform: "capitalize"}}
        >
          <Avatar src={`http://localhost:3001/img/pizzas/${props.image}`} sx={{ width: 80, height: 80 }} />
          <br/>
          ID: {props.id}
          <br/>
          Name: {props.name}
          <br/>
          Price: ${props.price}
          <br/>
          Category: 
          {props.category_id === 1 ? " Pizzas" : ""}
          {props.category_id === 2 ? " Quesos" : ""}
          {props.category_id === 3 ? " Vegetales" : ""}
          {props.category_id === 4 ? " Carnes" : ""}
          {props.category_id === 5 ? " Bebidas" : ""}
          {props.category_id === 6 ? " Alcohol" : ""}
          {props.category_id === 7 ? " Postres" : ""}
          <br/>
          Status: 
          {props.status_id === 1 ? " Activo" : ""}
          {props.status_id === 2 ? " Inactivo" : ""}
          {props.status_id === 3 ? " Sin stock" : ""}
        </Typography>
      </CardContent>
    </Card>
    </>
  );
}
