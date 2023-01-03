import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function CardTopFive(props) {
  return (
    <>
    <Card className="card" sx={{  margin: "20px", width:"20%", boxShadow: '1px 6px 10px 4px rgb(0 0 0 / 60%)' }}>
      <CardContent>
        <Typography
          variant="h5"
          color="white"
          sx={{ display: "flex", alignItems: "center", flexDirection:"column",fontSize:"18px" , textTransform: "capitalize"}}
        >          
          <br/>
          Name: {props.name}
          <br/>
          Quantity: {props.value}
        </Typography>
      </CardContent>
    </Card>
    </>
  );
}
