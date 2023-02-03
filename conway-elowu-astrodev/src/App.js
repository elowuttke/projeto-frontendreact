import React from 'react';
import { GlobalStyle } from './GlobalStyle.js';
import { Head } from './Components/Header/Header.js';
import { MainContainer } from './styled.js';
import { Filters } from './Components/Body/Filters.js';
import { ProductList } from './Components/Body/Products.js';
import { ShoppingCart } from './Components/Body/ShoppingCart.js';
import { Foot } from './Components/Footer/Footer.js';

export default function App() {

  return (
    <>
    <Head/>
      <MainContainer>
        <Filters/>
        <ProductList/>
        <ShoppingCart/>
      </MainContainer>
    <Foot/>
    </>
  );
}

