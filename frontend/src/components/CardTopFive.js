import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar, useThemeProps } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function CardTopFive(props) {
  return (
    <Card
      sx={{
        width: "17%",
        boxShadow: "1px 6px 10px 4px rgb(0 0 0 / 60%)",
        display: "flex",
        displayDirection: "column",
        justifyContent:"center",
        alignContent:"center",
        textAlign:"center",
      }}
      className="card"
    >
      <CardContent>
        <Typography
          gutterBottom
          fontFamily={"Console"}
          variant="h5"
          component="div"
          sx={{ textShadow: "0px 0px 0, 1px 2px 2px #5e1b88" }}
        >
          Top {props.top}
        </Typography>
        <Typography
          variant="h5"
          color="white"
          sx={{ display: "flex", alignItems: "center", fontSize: "20px" }}
        >
          
            <div>
              <br />
              
              <Avatar
                src={`http://localhost:3001/img/pizzas/${props.image}`}
                sx={{ width: 80, height: 80}}
              />
              Name: {props.name}
              <br />
              Sales: {props.value}
            </div>
          
        </Typography>
      </CardContent>
    </Card>
  );
}
