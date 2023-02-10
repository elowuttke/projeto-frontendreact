import React from "react";
import { HeaderContainer, HomePicture } from "./headerStyle";
import homeImage from "../../assents/images/et_phone_home_detail-600x600.jpg";

export function Header() {
  return (
    <HeaderContainer>
      <HomePicture img src={homeImage} alt="imagem E.T. phone home" />
      <h1>ASTRODEV</h1>
      <h3>CAMISETAS DIOU TRO MUNDU</h3>
    </HeaderContainer>
  );
}
