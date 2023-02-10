import React from "react";
import {
  ProductsCard,
  ProductPicture,
  ProductInfo,
  AddToCartButton,
} from "./productCardStyle";

export function ProductCard(props) {
  const { image, alt, name, price } = props;
  const { addToCart } = props;

  return (
    <ProductsCard>
      <ProductPicture img src={image[0]} alt={alt} />
      <ProductInfo>
        <p>{name}</p>
        <p>R$ {price.toFixed(2).replace(".", ",")}</p>
        <AddToCartButton onClick={() => addToCart()}>
          Adicionar ao Carrinho
        </AddToCartButton>
      </ProductInfo>
    </ProductsCard>
  );
}
