import React from "react";
import ListProducts from "../../components/cardsProdutos";
import Header from "../../components/header";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <main>
        <ListProducts />
      </main>
    </>
  );
};

export default DashboardPage;
