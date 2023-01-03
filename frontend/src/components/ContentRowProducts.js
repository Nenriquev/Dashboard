import { useEffect, useState } from "react";
import ImgMediaCard from "./Card";
import CardTotalProducts from "./CardTotalProducts";
import CardTotalCategories from "./CardTotalCategories";
import { Card } from "@mui/material";
import { Box } from "@mui/material";

const ContentRowProducts = (props) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/products/")
      .then((response) => response.json())
      .then((products) => {
        console.log(products);
        setProducts(products.totalCount);
        let categories = [
          {
            pizzas: products.countByCategory.pizzas_1,
            quesos: products.countByCategory.quesos_2,
            vegetales: products.countByCategory.vegetales_3,
            carnes: products.countByCategory.carnes_4,
            bebidas: products.countByCategory.bebidas_5,
            alcohol: products.countByCategory.alcoholes_6,
            postres: products.countByCategory.postres_7,
          },
        ];
        console.log(categories);

        setCategories(categories);
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
          margin: "20px 20px 20px 10px",
          padding: "0px 20px 10px",
          width:"50%",
          color: "white",
        }}
      >
        <h1>Products</h1>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <div>
            <CardTotalProducts number={products} />
            </div>
            <div>
              {categories.map((element, index) => {
                return <CardTotalCategories {...element} key={index} />;
              })}
            </div>
          
        </Box>
      </Card>
    </>
  );
};

export default ContentRowProducts;
