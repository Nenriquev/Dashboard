import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export default function CardTopFive(props) {
  return (
    <Card sx={{ width:"30%", boxShadow: '1px 6px 10px 4px rgb(0 0 0 / 60%)', marginBottom:"25px"}} className='card'>
      <CardContent>
        <Typography gutterBottom fontFamily={'Console'} variant="h5" component="div" sx={{textShadow: '0px 0px 0, 1px 2px 2px #5e1b88'}}>
          Total Sales
        </Typography>
        <Typography
          variant="h5"
          color="white"
          sx={{ display: "flex", alignItems: "center" , fontSize:"20px"}}
        >
          <LocalGroceryStoreIcon fontSize="large"/> {props.sales}
        </Typography>
      </CardContent>
    </Card>
  );
}
