import CardRow from "./CardRow";
import CardTotalCategories from "./CardTotalCategories";
import CardTopFive from "./CardTopFive";
import CardTotalSales from "./CardTotalSales";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const ContentRowProducts = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [top, setTop] = useState([]);
  const [totalSales, setTotalSales] = useState([]);

  useEffect(() => {
    fetch("/api/products/sales")
      .then((response) => response.json())
      .then((products) => {
        let five = [
          {
            name: products.top5Products[0].name,
            value: products.top5Products[0].value,
            top: 1,
            image: products.top5Products[0].image,
            category: products.top5Products[0].category,
          },
          {
            name: products.top5Products[1].name,
            value: products.top5Products[0].value,
            top: 2,
            image: products.top5Products[1].image,
            category: products.top5Products[1].category,
          },
          {
            name: products.top5Products[2].name,
            value: products.top5Products[0].value,
            top: 3,
            image: products.top5Products[2].image,
            category: products.top5Products[2].category,
          },
          {
            name: products.top5Products[3].name,
            value: products.top5Products[0].value,
            top: 4,
            image: products.top5Products[3].image,
            category: products.top5Products[3].category,
          },
          {
            name: products.top5Products[4].name,
            value: products.top5Products[0].value,
            top: 5,
            image: products.top5Products[4].image,
            category: products.top5Products[4].category,
          },
        ];
        setTop(five);
      });
  }, []);

  useEffect(() => {
    fetch("/api/products/sales")
      .then((response) => response.json())
      .then((products) => {
        let sales = [{ sales: products.totalSales }];
        setTotalSales(sales);
      });
  }, []);

  useEffect(() => {
    fetch("/api/products/")
      .then((response) => response.json())
      .then((products) => {
        setData((oldArray) => [
          ...oldArray,
          {
            category: "Productos",
            icon: "product",
            count: products.totalCount,
          },
        ]);
      });
  }, []);

  useEffect(() => {
    fetch("/api/products/")
      .then((response) => response.json())
      .then((products) => {
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
        setCategories(categories);
      });
  }, []);

  return (
    <>
      
        <div className="ContentRowProductsConteiner">
          <Typography
            gutterBottom
            fontFamily={"Console"}
            variant="h3"
            component="div"
            sx={{ textShadow: "0px 0px 0, 1px 2px 2px #5e1b88" }}
          >
            Products
          </Typography>
          <div className="ContentRowProductsBox">
            {data.map((element, index) => {
              return (
                <>
                  <CardRow  props={element} key={index}/>
                </>
              );
            })}

            {categories.map((element, index) => {
              return <CardTotalCategories {...element} key={index} />;
            })}

            {totalSales.map((element, index) => {
              console.log(totalSales);
              return <CardTotalSales {...element} key={index} />;
            })}
          </div>
          <div className="CardTopFiveBox">
            <Typography
              gutterBottom
              fontFamily={"Console"}
              variant="h3"
              component="div"
              sx={{ textShadow: "0px 0px 0, 1px 2px 2px #5e1b88" }}
            >
              Top 5 Products
            </Typography>
            <div className="CardTopFiveTop">
              {top.map((element, index) => {
                return <CardTopFive {...element} key={index} />;
              })}
            </div>
          </div>
        
      </div>
    </>
  );
};
export default ContentRowProducts;
