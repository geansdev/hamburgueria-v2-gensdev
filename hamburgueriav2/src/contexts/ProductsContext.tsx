import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../services/api";
import { IDefaultProviderProps, IProduct, IProductsContext } from "./@types";

export const ProductsContext = createContext({} as IProductsContext);

export const ProductsProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([] as IProduct[]);
  const [search, setSearch] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filteredProductsSearch, setFilteredProductsSearch] = useState(
    [] as IProduct[]
  );
  console.log(search);

  const SearchInput = (event: any) => {
    event.preventDefault();
    const filteredProducts = products.filter((product) =>
      !search
        ? true
        : product.name.toLowerCase().includes(search) ||
          product.category.toLowerCase().includes(search)
    );
    !filteredProducts.length
      ? (toast.error("Produto não encontrado"), setProducts(products))
      : setFilteredProductsSearch(filteredProducts);
  };

  useEffect(() => {
    const token = localStorage.getItem("@UserHamburgueria");
    const autoLogin = async () => {
      if (token) {
        try {
          const response = await Api.get<IProduct[]>("products", {
            headers: {
              Authorization: ` Bearer ${token}`,
            },
          });
          setProducts(response.data);
        } catch (error) {
          localStorage.clear();
          console.error(error);
        } finally {
          <h1>Aguarde...</h1>;
        }
      } else {
        navigate("/");
      }
    };
    autoLogin();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setSearch,
        search,
        SearchInput,
        filteredProductsSearch,
        setIsCartOpen,
        isCartOpen,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
