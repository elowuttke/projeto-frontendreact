import React from "react";
import styled from "styled-components";

// FILTERS
export const FiltersContainer = styled.nav`
  background-color: #383845;
  color: #aaaa91;
  padding: 1rem;
  width: 15%;
`;

export const StyledLabel = styled.label`
  width: 150px;
  // padding: 8px
`;

export const Input = styled.input`
  width: 100px;
  padding: 6px;
`;

// PRODUCTS
export const Main = styled.main`
  dislay: flex;
  width: 100%;
`;

export const ProductHead = styled.div`
  height: 2rem;
  width: 100%;
  display: flex;
  background-color: #5e5e5e;
  color: #12122b;
  padding: 15px;
  align-items: baseline;
  justify-content: space-between;
`;

export const ProductsContainer = styled.div`
  background-color: #5e5e5e;
  color: #aaaa91;
  padding: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
`;

export const ProductsCard = styled.div`
  background-color: #12122b;
  color: #aaaa91;
  width: 200px;
  height: auto;
  border-radius: 5px;
  text-align: left;
  display: flex;
  flex-wrap: wrap
`;

export const ProductPicture = styled.img`
  height: auto;
  width: 200px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  // : hover{
  //   src: {product.image[1]}
  // }
`;

export const ProductInfo = styled.div`
  height: 100px;
  width: 200px;
  padding: 5px 10px; 
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  // text-align: left
`;

export const AddToCartButton = styled.button`
  background-color: #383845;
  border-radius: 3px;
  cursor: pointer;
  width: 150px;
  padding: 3px;
  :hover {
    background-color: #848478;
    color: #12122b;
  }
`;

// SHOPPING CART
export const ShoppingCartContainer = styled.aside`
  background-color: #383845;
  color: #aaaa91;
  padding: 1rem;
  width: 15%;
`;

export const RemoveButton = styled.button`
  background-color: #12122b;
  color: #aaaa91;
  border-radius: 3px;
  cursor: pointer;
  width: 75px;
  padding: 3px;
  :hover {
    background-color: #848478;
    color: #12122b;
  }
`;