import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "./Components/Header/Header.js";
import { Filters } from "./Components/Filters/Filters";
import { Home } from "./Components/ProductList/Home/Home";
import { Cart } from "./Components/ShoppingCart/Cart/Cart";
import { Footer } from "./Components/Footer/Footer";
import { GlobalStyle } from "./GlobalStyle";
import { products } from "./assents/productList";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const MainContainer = styled.body`
  width: 100%;
  background-color: #f7e6be;
  display: flex;
  margin: 0;
`;

function App() {
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const handleInputMinFilter = (e) => setMinFilter(e.target.value);
  const handleInputMaxFilter = (e) => setMaxFilter(e.target.value);
  const handleInputSearchFilter = (e) => setSearchFilter(e.target.value);
  const plusOneQuantity = (e) => setQuantity(quantity + 1);
  const minusOneQuantity = (e) => setQuantity(quantity - 1);

  const addToCart = (shirt) => {
    if (cart.includes(shirt)) {
      setQuantity(quantity + 1);
    } else {
      return setCart([...Cart, shirt]);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <MainContainer>
          <Filters
            states={{ minFilter, maxFilter, searchFilter }}
            handlers={{
              handleInputMinFilter,
              handleInputMaxFilter,
              handleInputSearchFilter,
            }}
          />
          <Home
            products={products
              .filter((shirt) => {
                if (minFilter !== "") {
                  return shirt.price >= minFilter;
                } else {
                  return shirt;
                }
              })
              .filter((shirt) => {
                if (maxFilter !== "") {
                  return shirt.price <= maxFilter;
                } else {
                  return shirt;
                }
              })
              .filter((shirt) => {
                if (searchFilter !== "") {
                  return shirt.name
                    .toLowerCase()
                    .includes(searchFilter.toLowerCase());
                } else if (searchFilter === "") {
                  return shirt;
                }
              })}
            states={{ quantity, setQuantity, cart, setCart }}
            addToCart={addToCart}
          />
          <Cart
            states={{ quantity, setQuantity, cart, setCart }}
            plusOneQuantity={plusOneQuantity}
            minusOneQuantity={minusOneQuantity}
          />
        </MainContainer>
        <Footer />
      </Container>
    </>
  );
}

export default App;
