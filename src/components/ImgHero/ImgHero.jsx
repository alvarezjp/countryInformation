import { useEffect, useState } from "react";
import styled from "styled-components";

const Contain = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center;
align-items: center; */
  position: relative;

  @media (max-width: 1100px) {
    display: none;
  }
`;
const ImgStyled = styled.img`
  width: 30%;
  height: 70%;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  position: absolute;
`;

const ImgHero = () => {
  return (
    <Contain>
      <ImgStyled src="./img/subFondo2.jpg" style={{ top: "7%", left: "15%" }} />
      <ImgStyled
        src="./img/subFondo3.jpg"
        style={{ bottom: "7%", right: "15%" }}
      />
    </Contain>
  );
};

export default ImgHero;
