import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  
  const [pizzas, setPizzas] = useState([]);
  
  const getPizzas = async () => { 
    const res = await fetch(`${import.meta.env.VITE_URL}`);
  const data = await res.json();

   
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
      <Header />
      <div className="album py-5 ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {pizzas.map((pizza) => (
              <CardPizza key={pizza.id} pizzas={pizza} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;