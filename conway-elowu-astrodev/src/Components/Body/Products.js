import React from "react";
import {
  Main,
  ProductHead,
  ProductsContainer,
  AddToCartButton,
  ProductInfo,
  ProductPicture,
  ProductsCard,
} from "./styled";

export function ProductList({ products }) {
  return (
    <Main>
      <ProductHead>
        <label>Quantidade de Produtos: </label>
        <select>
          <option>Ordenar</option>
          <option>A - Z</option>
          <option>Z - A</option>
          <option>$ - $$$$$</option>
          <option>$$$$$ - $</option>
        </select>
      </ProductHead>
      <ProductsContainer>
        {products.map((product) => {
          console.log(product.image[0])
          return (
            <ProductsCard>
              <ProductPicture src={product.image[0]} alt="Imagem da camiseta" />
              <ProductInfo>
                <p>{product.name}</p>
                <p>R${product.price.toFixed(2)}</p>
                <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
              </ProductInfo>
            </ProductsCard>
          );
        })}
      </ProductsContainer>
    </Main>
  );
}
