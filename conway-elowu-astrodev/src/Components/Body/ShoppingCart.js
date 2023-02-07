import React from "react";
import { RemoveButton, ShoppingCartContainer } from "./styled";

export function ShoppingCart () {

    return(
        <ShoppingCartContainer>
            <h3>Carrinho de compras:</h3>
            <p>3X Camiseta Tom & Jerry Rivais Planetários</p>
            <RemoveButton>Remover</RemoveButton>
        </ShoppingCartContainer>
    )
}