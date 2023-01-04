import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AstroAvatar from "../assets/images/astronauta.jpg"

import "../assets/css/navbar.css";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.60)",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderBottom: "5px solid #5e1b88 "
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "center"}}
      >
        <Toolbar disableGutters sx={{flexGrow: "1"}}>
          <div className="box1">
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

            <Box sx={{ flexGrow: 3, display: { xs: "none", md: "flex" }, justifyContent: "center"}}>
              <div className="hiddening">
                <h1 className="title">🚀Astro Pizza Dashboard🍕</h1>
              </div>
            </Box>
          </div>
          <div className="box2">
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="User">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Astro" src={AstroAvatar} sx={{ width: 50, height: 50 }}  />
                </IconButton>
              </Tooltip>
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
