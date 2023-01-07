import React, { useContext, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxExit } from "react-icons/rx";
import { UserContexts } from "../../contexts/UserContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import { HeaderStyle } from "./style";

const Header = () => {
  const { UserLogout } = useContext(UserContexts);
  const { setSearch, search, SearchInput, setIsCartOpen } =
    useContext(ProductsContext);

  return (
    <HeaderStyle>
      <picture>
        <img src="src/assets/Logo.svg" alt="Logo BurguerKenzie" />
      </picture>
      <div>
        <form onSubmit={(event) => SearchInput(event)}>
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type={"submit"}>
            <BiSearchAlt2 />
          </button>
        </form>
        <button onClick={() => setIsCartOpen(true)}>
          <AiOutlineShoppingCart />
        </button>
        <button onClick={() => UserLogout()}>
          <RxExit />
        </button>
      </div>
    </HeaderStyle>
  );
};

export default Header;
