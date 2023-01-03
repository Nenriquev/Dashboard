import { useEffect, useState } from "react";
import ImgMediaCard from "./Card";
import CardProductsList from "./CardProductsList";
import { Card } from "@mui/material";
import { Box } from "@mui/material";

const ContentRowProducts = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products/list")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products.products);
      });
  }, []);

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          bgcolor: "#1E0943",
          padding: "0px 20px 10px",
          margin: "10px 20px 10px",
          color: "white",
          height: "600px",
          width:" 70vw",
          bgColor:"green"
        }}

      >
        <h1>Products</h1>
        <Box sx={{ display: "flex",  overflow:"scroll", flexWrap: 'wrap'}}>

            {products.map((element, index) => {
                return <CardProductsList {...element} key={index} />;
              })}

        </Box>
      </Card>
    </>
  );
};

export default ContentRowProducts;
