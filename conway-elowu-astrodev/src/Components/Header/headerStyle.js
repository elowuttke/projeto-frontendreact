import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: auto;
  width: 96vw;
  background-color: #12122b;
  color: #aaaa91;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 2rem;
`;

export const HomePicture = styled.img`
  height: 30px;
  width: auto;
  :hover  {
    height: 200px;
    transition: 0.5s;
    cursor: pointer;
  }
`;
