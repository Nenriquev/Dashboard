import ContentRowUsers from "./ContentRowUsers";
import NewSideBar from "./NewSideBar";
import { Box } from "@mui/system";
import { Card } from "@mui/material";
import Navbar from './Navbar'

const ContentWrapper = () => {
  return (
    <>
    <Navbar />
    <div className="container">
      <Box sx={{display: "flex"}}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <NewSideBar />
        </Card>

        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            bgcolor: "black",
            width: "80vw",
            opacity: "0.9",
            margin: "20px 0px 0px",
          }}
        >
          <ContentRowUsers />
        </Card>
      </Box>
    </div></>
  );
};

export default ContentWrapper;
