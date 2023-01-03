import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar } from "@mui/material";

const CardLastUser = (props) => {
  return (
    <Card
      sx={{ width: "300px", boxShadow: "1px 6px 10px 4px rgb(0 0 0 / 60%)"}}
      className="card"
    >
      <CardContent>
        <Typography
          gutterBottom
          fontFamily={"Console"}
          variant="h5"
          component="div"
          sx={{
            textShadow: "0px 0px 0, 1px 2px 2px #5e1b88",
            textAlign: "center",
          }}
        >
          Last User Created
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center", flexDirection:"column",fontSize:"18px" , textTransform: "capitalize"}}>
          <Avatar src={props.img} sx={{ width: 100, height: 100 }} />
        </Typography>
        <Typography
          variant="h5"
          color="white"
          
          sx={{ textAlign:"center" }}
        >
          {props.names}
          <br />
          {props.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardLastUser;
