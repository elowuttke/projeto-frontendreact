import styled from "styled-components";

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
