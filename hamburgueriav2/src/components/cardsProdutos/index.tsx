import React, { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { CardLiStyled } from "./style";

const ListProducts = () => {
  const { products, filteredProductsSearch } = useContext(ProductsContext);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <ul>
          {filteredProductsSearch.length
            ? filteredProductsSearch.map((ele) => (
                <CardLiStyled key={ele.id}>
                  <div>
                    <img src={ele.img} alt={ele.name} />
                    <div>
                      <h2>{ele.name}</h2>
                      <span>{ele.category}</span>
                      <p>$ {ele.price}</p>
                    </div>
                  </div>
                  <button>Adicionar</button>
                </CardLiStyled>
              ))
            : products.map((ele) => (
                <CardLiStyled key={ele.id}>
                  <div>
                    <img src={ele.img} alt={ele.name} />
                    <div>
                      <h2>{ele.name}</h2>
                      <span>{ele.category}</span>
                      <p>$ {ele.price}</p>
                    </div>
                  </div>
                  <button>Adicionar</button>
                </CardLiStyled>
              ))}
        </ul>
      )}
    </div>
  );
};

export default ListProducts;
