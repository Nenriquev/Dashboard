import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar, useThemeProps } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function CardTopFive(props) {
  return (
    <Card
      sx={{
        width: "25%",
        boxShadow: "1px 6px 10px 4px rgb(0 0 0 / 60%)",
        display: "flex",
        displayDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        marginTop: "15px",
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
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                fontSize: "18px",
                textTransform: "capitalize",
              }}
            >
              <Avatar src={props.image} sx={{ width: 100, height: 100 }} />
            </Typography>
            <br />
            {props.name}
            <br />
            {props.email}
            <br />
            Sales: {props.orders}
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}
