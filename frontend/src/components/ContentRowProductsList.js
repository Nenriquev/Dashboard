import { useEffect, useState } from "react";
import CardProductsList from "./CardProductsList";
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
      <h1>Listado de Productos</h1>
      <Box sx={{ display: "flex",  flexWrap: "wrap" , height:"90vh", marginLeft:"5%"}}>
        {products.map((element, index) => {
          return <CardProductsList {...element} key={index} />;
        })}
      </Box>
    </>
  );
};

export default ContentRowProducts;
