import ContentRowUsers from "./ContentRowUsers";
import ContentRowProducts from "./ContentRowProducts";
import ContentRowProductsList from "./ContentRowProductsList";
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
            bgcolor: "red",
            opacity: "0.9",
            width: "80vw",
            margin: "20px 0px 0px",
          }}
        >
          <Box sx={{
            display: "flex",
            justifyContent:"space-evenly"
            
          }}>
            <ContentRowUsers />
            <ContentRowProducts />
          </Box>

          <Box sx={{
            display: "flex",
          }}>
          <ContentRowProductsList/>
          </Box>

        </Card>
      </Box>
    </div>
  );
};

export default ContentWrapper;
