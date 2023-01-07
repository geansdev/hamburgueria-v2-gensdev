import React from "react";
import ListProducts from "../../components/cardsProdutos";
import Header from "../../components/header";

/* import Modal from "../../components/modal"; */

const DashboardPage = () => {
  return (
    <>
      <Header />
      <main>
        <ListProducts />
      </main>
      {/*  <Modal /> */}
    </>
  );
};

export default DashboardPage;
