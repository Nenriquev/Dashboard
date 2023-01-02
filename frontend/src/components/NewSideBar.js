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
        width: "100%",
        height: "100%",
        color: "white"
    }}>
        <img src={LogoAstro} width="100%"/>
        <ListDividers />
        <img src={AstroGif} width="90%" style={{transform: "scaleX(-1)"}}/>
      </Box>
    </>
  );
}

export default NewSideBar;
