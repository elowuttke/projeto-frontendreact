import React from "react";
import { Item } from "../Item/Item.js";
import { CartContainer } from "./cartStyle";

export function Cart(props) {
  const { quantity, setQuantity, cart, setCart } = props.states;
  const { plusOneQuantity } = props;
  const { minusOneQuantity } = props;

  return (
    <CartContainer>
      <h3>Carrinho de Compras:</h3>
      {cart.map((shirt) => {
        return (
          <Item
            states={{ quantity, setQuantity }}
            name={shirt.name}
            price={shirt.price}
            plusOneQuantity={plusOneQuantity}
            minusOneQuantity={minusOneQuantity}
          />
        );
      })}
      <p>Valor Total:</p>
    </CartContainer>
  );
}
