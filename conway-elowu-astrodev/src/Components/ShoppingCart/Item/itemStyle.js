import styled from "styled-components";

export const CartItem = styled.div`
  text-align: left;
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

export const QuantityButton = styled.button`
  background-color: #12122b;
  color: #aaaa91;
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  width: 20px;
  :hover {
    background-color: #848478;
    color: #12122b;
  }
`;
