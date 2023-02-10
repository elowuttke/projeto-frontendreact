import styled from "styled-components";

export const ProductsCard = styled.div`
  background-color: #12122b;
  color: #aaaa91;
  width-min: 200px;
  height: auto;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
`;

export const ProductPicture = styled.img`
  height: auto;
  width: 200px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  // : hover{
  //   img src: image[1]
  // }
`;

export const ProductInfo = styled.div`
  height: 100px;
  width: 200px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  text-align: center;
`;

export const AddToCartButton = styled.button`
  background-color: #383845;
  border-radius: 3px;
  cursor: pointer;
  width: 150px;
  padding: 3px;
  :hover {
    background-color: #848478;
    color: #12122b;
  }
`;
