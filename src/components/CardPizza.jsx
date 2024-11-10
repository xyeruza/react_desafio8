import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import iconPizza from "../assets/img/icon-pizza.png";
import iconEyes from "../assets/img/icon-eyes.png";
import iconCart from "../assets/img/icon-cart.png";
import { CartContext } from "../context/CartContext";

const CardPizza = ({pizzas}) => {
  const { agregar } = useContext(CartContext);
  const precio = pizzas.price;
  const formattedPrecio = precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP'}); 
  const [id, setId] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div key={pizzas.id} className="col">
        <div className="card shadow-sm rounded-3">
          <img src={pizzas.img} alt="" />
          <div className="card-body">
            <h3>Pizza {pizzas.name}</h3>
            <hr className="border-bottom border-1 border-dark"></hr>
            <p className="text-center"> <img src={iconPizza} alt="icon-pizza" width="30"
                  height="24"/>  Ingredientes:</p>
            
            <ul>
              {pizzas.ingredients.map((pizza,index)=>(
                <li key={index}>{pizza}</li>
              ))}
              
            </ul>
            <hr className="border-bottom border-1 border-dark"></hr>
            <p className="text-center fs-4 fw-medium">Precio {formattedPrecio}</p>
            <div className="d-flex justify-content-between ">
              
                <button
                onClick={()=> navigate(`/pizza/${pizzas.id}`)}
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Ver Más
                  <img src={iconEyes} alt="icon-eyes" width="30"
                  height="24"/>
                </button>

                <button
                  type="button"
                  className="btn btn-sm btn-dark btn-outline-primary text-white"
                  onClick={() => agregar(pizzas)}
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
    </>
  );
};

export default CardPizza;
