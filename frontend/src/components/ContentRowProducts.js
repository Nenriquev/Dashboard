import CardRow from "./CardRow";
import CardTotalCategories from "./CardTotalCategories";
import { useEffect, useState } from "react";

const ContentRowProducts = () => {
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    
  
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
return(
    <>
        {data.map((element, index) => {
        return (
          <>
            <CardRow key={index} props={element} />
          </>
        );
      })}
      <div>
          {categories.map((element, index) => {
            return <CardTotalCategories {...element} key={index} />;
          })}
        </div>
    </>
)
};
export default ContentRowProducts;