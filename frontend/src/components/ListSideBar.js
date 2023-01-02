import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
  width: "95%",
  maxWidth: 360,
  height: "100%",
};

export default function ListDividers() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Usuarios" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Productos" />
      </ListItem>
      <Divider light />
    </List>
  );
}
