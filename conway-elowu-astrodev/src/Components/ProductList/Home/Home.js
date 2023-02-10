import React, { useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { Main, ProductHead, ProductsContainer } from "./homeStyle";

export function Home(props) {
  const { products } = props;
  const { quantity, setQuantity, cart, setCart } = props.states;
  const { addToCart } = props;

  const [ordination, setOrdination] = useState("");

  const handleOrdination = (e) => setOrdination(e.target.value);

  const renderList = products
    .sort((a, b) => {
      const nameCurrent = a.name;
      const nameNext = b.name;
      const priceCurrent = a.price;
      const priceNext = b.price;
      if (ordination === "asc") {
        return nameCurrent > nameNext ? 1 : -1;
      } else if (ordination === "desc") {
        return nameCurrent > nameNext ? -1 : 1;
      } else if (ordination === "cheaperFirst") {
        return priceCurrent > priceNext ? 1 : -1;
      } else if (ordination === "expensiveFirst") {
        return priceCurrent > priceNext ? -1 : 1;
      } else if (ordination === "modelYear") {
        return a.modelo - b.modelo;
      } else {
        return a.modelo - b.modelo;
      }
    })
    .map((prod) => {
      return (
        <ProductCard
          image={prod.image}
          alt={prod.alt}
          name={prod.name}
          price={prod.price}
          addToCart={addToCart}
        />
      );
    });

  return (
    <Main>
      <ProductHead>
        <label>Quantidade de Produtos: {renderList.length}</label>
        <select value={ordination} onChange={handleOrdination}>
          <option value="modelYear">Ordenar</option>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
          <option value="cheaperFirst">$ - $$$$$</option>
          <option value="expensiveFirst">$$$$$ - $</option>
        </select>
      </ProductHead>
      <ProductsContainer states={quantity}>{renderList}</ProductsContainer>
    </Main>
  );
}
