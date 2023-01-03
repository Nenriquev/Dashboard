import { useEffect, useState } from "react";
import ImgMediaCard from "./CardRow";
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
    <div>
      <h1>Products</h1>
      <Box sx={{ display: "flex", overflow: "scroll", flexWrap: "wrap" }}>
        {products.map((element, index) => {
          return <CardProductsList {...element} key={index} />;
        })}
      </Box>
    </div>
  );
};

export default ContentRowProducts;
