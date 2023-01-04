import { useEffect, useState } from "react";
import CardProductsList from "./CardProductsList";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const ContentRowProducts = (props) => {
  const [total, setTotal] = useState([]);

  useEffect(() => {
    fetch("/api/products/sales")
      .then((response) => response.json())
      .then((products) => {
        setTotal(products.totalProducts);
      });
  }, []);

  return (
    <>
    <Typography
          gutterBottom
          fontFamily={"Console"}
          variant="h3"
          component="div"
          sx={{ textShadow: "0px 0px 0, 1px 2px 2px #5e1b88", margin:"20px 0" }}
        >
          Listado de Productos
        </Typography>
      
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          height: "90vh",
          marginLeft: "5%",
        }}
      >
        {total.map((element, index) => {
          return <CardProductsList {...element} key={index} />;
        })}
      </Box>
    </>
  );
};

export default ContentRowProducts;
