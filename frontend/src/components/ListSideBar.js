import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import {useNavigate} from "react-router-dom";


const style = {
  width: "95%",
  maxWidth: 360,
  height: "100%",
};

export default function ListDividers() {

  let navigate = useNavigate(); 
  const routeChange = (link) =>{ 
    navigate(link);
  }

  

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Dashboard" onClick={(e) => routeChange('/')}/>
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Usuarios" onClick={(e) => routeChange('/users')} />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Productos" onClick={(e) => routeChange('/products')} />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Listado" onClick={(e) => routeChange('/list')} />
      </ListItem>
      <Divider light />
    </List>
  );
}
