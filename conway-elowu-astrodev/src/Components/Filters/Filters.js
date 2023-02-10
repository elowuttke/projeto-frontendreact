import React from "react";
import { FiltersContainer, StyledLabel, Input } from "./filtersStyle";

export function Filters(props) {
  const { minFilter, maxFilter, searchFilter } = props.states;
  const {
    handleInputMinFilter,
    handleInputMaxFilter,
    handleInputSearchFilter,
  } = props.handlers;

  return (
    <FiltersContainer>
      <h3>Filtros</h3>
      <StyledLabel>
        Valor mínimo:
        <br />
        <Input
          type={"number"}
          value={minFilter}
          onChange={handleInputMinFilter}
        />
      </StyledLabel>
      <br />
      <StyledLabel>
        Valor máximo:
        <br />
        <Input
          type={"number"}
          value={maxFilter}
          onChange={handleInputMaxFilter}
        />
      </StyledLabel>
      <br />
      <StyledLabel>
        Busca por nome:
        <br />
        <Input
          type={"text"}
          value={searchFilter}
          onChange={handleInputSearchFilter}
        />
      </StyledLabel>
    </FiltersContainer>
  );
}
