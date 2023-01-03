import CardRow from "./CardRow";
import {useState, useEffect} from 'react'

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/users/")
      .then((response) => response.json())
      .then((users) => {
            setData(oldArray => [...oldArray, {category: 'Usuarios', icon: 'user', count: users.count}]) 
      })},[]);

  useEffect(() => {
    fetch("/api/products/")
      .then((response) => response.json())
      .then((products) => {
        setData(oldArray => [...oldArray, {category: 'Productos', icon: 'product', count: products.totalCount}]) 
      })},[]);

 

  return (
    <div className="topRow">
      
      {data.map((element, index)=>{
        return(
          <CardRow key={index} props={element}/>
        )
      })}
      
    </div>
  );
};

export default HomePage;
