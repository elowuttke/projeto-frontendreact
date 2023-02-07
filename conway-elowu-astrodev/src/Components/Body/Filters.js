import React from "react";
import { FiltersContainer, Input, StyledLabel } from "./styled";

export function Filters() {
  return (
    <FiltersContainer>
      <h3>Filtros</h3>
      <StyledLabel>
        Valor mínimo:
        <br />
        <Input type={"number"} />
      </StyledLabel>
      <br />
      <StyledLabel>
        Valor máximo:
        <br />
        <Input type={"number"} />
      </StyledLabel>
      <br />
      <StyledLabel>
        Busca por nome:
        <br />
        <Input type={"text"} />
      </StyledLabel>
    </FiltersContainer>
  );
}
