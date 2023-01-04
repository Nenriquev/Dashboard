import React from "react";
import LogoAstro from "../assets/images/astro.png";
import ListDividers from "./ListSideBar";
import { Box } from "@mui/system";
import AstroGif from "../assets/images/astronaut.gif"

function NewSideBar() {
  return (
    <>
      <Box sx={{
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        width: "25vh",
        height: "92vh",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        borderRight: "5px solid #5e1b88",
        borderBottom: "5px solid #5e1b88"
      
    }}>
        <img src={LogoAstro} width="100%" alt="logo"/>
        <ListDividers />
        <img src={AstroGif} width="90%" style={{transform: "scaleX(-1)"}} alt='astrogif'/>
      </Box>
    </>
  );
}

export default NewSideBar;
