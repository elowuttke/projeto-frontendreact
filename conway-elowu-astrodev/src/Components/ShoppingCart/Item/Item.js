import React from "react";
import { CartItem, RemoveButton, QuantityButton } from "./itemStyle";

export function Item(props) {
  const { quantity, setQuantity } = props.states;
  const { name } = props;
  const { price } = props;
  const { plusOneQuantity } = props;
  const { minusOneQuantity } = props;

  return (
    <CartItem>
      <QuantityButton value="plusButton" onClick={plusOneQuantity}>
        +
      </QuantityButton>
      <span value="quantity">{quantity}</span>
      <QuantityButton value="minusButton" onClick={minusOneQuantity}>
        -
      </QuantityButton>
      <span>R$ {price}</span>
      <p>{name}</p>
      <RemoveButton>Remover</RemoveButton>
    </CartItem>
  );
}
