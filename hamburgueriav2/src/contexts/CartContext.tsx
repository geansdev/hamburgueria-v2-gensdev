import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IDefaultProviderProps, IProduct } from "./@types";

export const CartContext = createContext({} as ICartContext);

/* export interface ICartProduct extends IProduct {
  count: number;
} */

export interface ICartContext {
  cart: IProduct[];
  addProductCart: (product: IProduct) => void;
  removerAllProductsCart: () => void;
  removeProductFromCart: (id: number) => void;
  countAdd: () => void;
  countSub: () => void;
  count: number;
}

export const CartProvider = ({ children }: IDefaultProviderProps) => {
  const localStorageCart = localStorage.getItem("@UserHamburgueria");
  const [cart, setCart] = useState<IProduct[]>(
    localStorageCart ? JSON.parse(localStorageCart) : []
  );

  const [count, setCount] = useState(1);

  useEffect(() => {
    localStorage.setItem("@UserHamburgueria", JSON.stringify(cart));
  }, [cart]);

  const addProductCart = (product: IProduct) => {
    if (!cart.some((cartProduct: IProduct) => cartProduct.id === product.id)) {
      /* const newProduct = { ...product, count: 1 }; */
      setCart([...cart, product]);
    } else {
      toast.error("Item ja foi adicionado");
    }
    /* else {
      const newList = cart.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, count: cartProduct.count + 1 };
        } else {
          return cartProduct;
        }
      });
      setCart(newList);
    } */
  };

  const countAdd = () => {
    setCount(count + 1);
  };

  const countSub = () => {
    setCount(count - 1);
  };

  const removeProductFromCart = (id: number) => {
    const arrCardRemoved = cart.filter((card) => card.id !== id);
    setCart(arrCardRemoved);
    toast.success("Produto removido com sucesso");
  };

  const removerAllProductsCart = () => {
    setCart([]);
    toast.success("Todos os produtos removidos com sucesso");
  };

  return (
    <CartContext.Provider
      value={{
        addProductCart,
        removerAllProductsCart,
        cart,
        count,
        removeProductFromCart,
        countAdd,
        countSub,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
