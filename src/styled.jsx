import React from "react";
import styled from "styled-components";

const Contain = styled.article`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;

  background-image: url("img/fondo3.jpg");
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
`;
const TextArticle = styled.article`
box-sizing: border-box; 
  width: 50%;
  height: 100%;
  border: 1px solid red;
`;
const InfoArticle = styled.article`
  width: 50%;
  height: 100%;
  border: 1px solid blue;
`;



const StyledSection = styled.section`
  position: absolute;
  width: 90%;
  height: 80%;
  left: 5%;
  top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  h1 {
    margin-bottom: 8px;
    font-size: 56px;
    text-align: center;
    color: black;
  }
`;

const StyledDiv = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  width: 90%;
  margin-top: 16px;
`;
export { Contain, TextArticle,InfoArticle, StyledSection,StyledDiv };
