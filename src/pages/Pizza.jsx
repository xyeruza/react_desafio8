import React, {useContext, useState, useEffect} from "react";
import { useParams  } from "react-router-dom";
import iconPizza from "../assets/img/icon-pizza.png";
import iconCart from "../assets/img/icon-cart.png";
import { CartContext } from "../context/CartContext";

const Pizza = () => {
  // Definicion de variables
  const { id } = useParams();
  const { agregar } = useContext(CartContext);
  const [pizza, setPizza] = useState([]);
  const [ingredientes, setIngredientes] = useState([]);
  const [precio, setPrecio] = useState([]);
 const formattedPrecio = precio.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  //Definicion de funciones


  const getPizza = async () => {
    const res = await fetch(`${import.meta.env.VITE_URL}/${id}`);
    const data = await res.json();
    const {img, desc, ingredients, name, price} = data;
    setPizza({img, desc, ingredients, name, price});
    setIngredientes(data.ingredients);
    setPrecio(data.price);
  };

  useEffect(() => {
    getPizza();
  }, []);

  
  
  return (
    <>
      <div className="album py-5 ">
        <div className="container">
          <div className="row  g-3">
            <div key={pizza.id} className="col-12">
              <div className="d-flex">
                <img src={pizza.img} alt="" />
                <div className="card-body m-5">
                  <h3>Pizza {pizza.name}</h3>
                  <hr className="border-bottom border-1 border-dark"></hr>
                  <p className="">{pizza.desc}</p>
                  <hr className="border-bottom border-1 border-dark"></hr>

                  <p className="text-center">
                    {" "}
                    <img
                      src={iconPizza}
                      alt="icon-pizza"
                      width="30"
                      height="24"
                    />
                     Ingredientes: 
                  </p>
                  <p className="text-center">{ingredientes.join(", ")}</p>

                  <hr className="border-bottom border-1 border-dark"></hr>
                  <p className="text-center fs-4 fw-medium">
                    Precio {formattedPrecio}
                  </p>
                  <div className="text-center">
                    
                  <button
                  type="button"
                  className="btn btn-lg btn-dark btn-outline-primary text-white"
                  onClick={() => agregar(pizza)}
                >
                  Añadir <img
                  src={iconCart}
                  alt="icon cart"
                  width="30"
                  height="24"
                  className="d-inline-block align-text-top"
                />
                </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pizza;