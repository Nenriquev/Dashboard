import ContentRowUsers from "./ContentRowUsers";
import Footer from "./Footer";
import NewSideBar from "./NewSideBar";
import { Box } from "@mui/system";
import { Card } from "@mui/material";

const ContentWrapper = () => {
  return (
    <div className="backg">
      <Box
        sx={{
          display: "flex",
          bgcolor: "transparent",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "15vw",
            height: "95vh",
            bgcolor: "black",
            opacity: "0.9",
            margin: "20px 10px 0px 0px",
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
    </div>
  );
};

export default ContentWrapper;
