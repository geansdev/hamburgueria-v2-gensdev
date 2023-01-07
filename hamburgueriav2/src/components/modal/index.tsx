/* import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductsContext } from "../../contexts/ProductsContext";

const Modal = () => {
  const { cart, removerAllProductsCart, count, countAdd, countSub } =
    useContext(CartContext);

  const { setIsCartOpen, isCartOpen } = useContext(ProductsContext);

  console.log(cart);

  const totalCart = cart.reduce((acc, act) => {
    return acc + act.price;
  }, 0);

  if (!Modal) {
    return null;
  }
  return (
    <div>
      <div>
        <div>
          <p>Carrinho de Compras</p>
          <button onClick={() => setIsCartOpen(false)}>X</button>
        </div>
        <ul>
          {cart.map((ele) => (
            <li key={ele.id}>
              <div>
                <img src={ele.img} alt={ele.name} />
                <div>
                  <p>{ele.name}</p>
                  <div>
                    <button onClick={() => countSub}>-</button>
                    <span>{count}</span>
                    <button onClick={() => countAdd}>+</button>
                  </div>
                </div>
                <div>
                  <button>Lixeira</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <p>Total</p>
          <span>{totalCart}</span>
        </div>
        <button onClick={() => removerAllProductsCart}>Remover Todos</button>
      </div>
    </div>
  );
};

export default Modal;
 */
