import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";

const CardRow = (props) =>{
  return (
    
      <Card sx={{  boxShadow: '1px 6px 10px 4px rgb(0 0 0 / 60%)', marginBottom:"25px"}} className='card'>

      <CardContent>
        <Typography gutterBottom fontFamily={'Console'} variant="h5" component="div" sx={{textShadow: '0px 0px 0, 1px 2px 2px #5e1b88' }}>
          Total {props.props.category}
        </Typography>
        <Typography
          variant="h5"
          color="white"
          sx={{ display: "flex", alignItems: "center", fontSize:"45px", justifyContent:"center", marginTop:"20px"}}
        >
          {props.props.icon === 'user' ? <PersonIcon sx={{ fontSize:"70px"}}/> : <LocalPizzaIcon sx={{ fontSize:"70px"}}/>}
           {props.props.count}
        </Typography>
      </CardContent>
    </Card>
    
  );
}

export default CardRow;
