import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Head } from "./Components/Header/Header.js";
import { MainContainer } from "./styled.js";
import { Filters } from "./Components/Body/Filters.js";
import { ProductList } from "./Components/Body/Products.js";
import { ShoppingCart } from "./Components/Body/ShoppingCart.js";
import { Foot } from "./Components/Footer/Footer.js";
import { products } from "./Components/assents/productsList.js";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
  }
`;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Head />
        <MainContainer>
          <Filters />
          <ProductList products={products} />
          <ShoppingCart />
        </MainContainer>
        <Foot />
      </Container>
    </>
  );
}