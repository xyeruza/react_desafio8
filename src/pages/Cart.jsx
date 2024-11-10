import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import iconPizza from "../assets/img/icon-pizza.png";

const Cart = ({ pizzas }) => {
  const { carrito, setCarrito, total, formatted_total, agregar, eliminar, envioCarrito } =
    useContext(CartContext);
  const { user } = useContext(UserContext);

  return (
    <>
      <main>
        <div className="p3 container">
          <div className="d-flex justify-content-between align-items-center m-4">
            <div>
              <h2 className="text-center fs-2 fw-bold py-2">
                Detalles del pedido
              </h2>
            </div>
            <div className="bg-secondary-subtle p-3 rounded">
              <h4 className="">
                Cantidad de productos: <span className="fw-bold">{total}</span>
              </h4>
              <h4 className="">
                Precio Total:{" "}
                <span className="fw-bold"> {formatted_total}</span>
              </h4>
              {user ? (
                <>
                  <button className="btn btn-success my-2 me-2 btn-lg" onClick={envioCarrito}>
                    Pagar
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-success my-2 me-2 btn-lg" disabled>
                    Pagar
                  </button>
                  <p className="fs-6 text-muted">Tienes una cuenta? Inicia sesi&oacute;n para pagar.</p>
                </>
              )}
            </div>
          </div>
          {total == 0 ? (
            <p className="m-4 alert alert-light">
              <img
                src={iconPizza}
                alt="icon pizza"
                width="30"
                height="24"
                className="d-inline-block me-1"
              />
              No hay pizzas en el carrito. Agrega pizzas desde
              <Link to="/" className="ms-1">
                Home
              </Link>
            </p>
          ) : (
            carrito.map((pizza) => (
              <div className="row justify-content-center m-3" key={pizza.id}>
                <div className="col-4">
                  <img src={pizza.img} className="img-fluid" alt="" />
                </div>
                <div className="col-8">
                  <h3 className="text-capitalize">{pizza.name}</h3>
                  <p>{pizza.desc}</p>
                  <p className="fw-bold fs-5 my-3">Precio: $ {pizza.price}</p>
                  <p className="fw-bold ">Cantidad: {pizza.count}</p>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-success my-2 me-2"
                      onClick={() => agregar(pizza)}
                    >
                      Añadir
                    </button>
                    <button
                      className="btn btn-danger my-2"
                      onClick={() => eliminar(pizza)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </>
  );
};

export default Cart;
