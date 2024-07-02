import React from "react";
import styled from "styled-components";

const Contain = styled.article`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;

  /* background-image: url("img/fondo3.jpg"); */
  /* background-color: rgba(0, 0, 0, 0.8); */
  /* background-blend-mode: multiply;
  background-size: cover;
  background-position: center; */
  @media (max-width: 768px) {
    /* height: 111vh; */
    padding-top: 64px;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid yellow; */
  }
`;
const TextArticle = styled.article`
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 16px;
  @media (max-width: 768px) {
    /* border: 1px solid red; */
    width: 90%;
    height:auto;
  }
`;
const InfoArticle = styled.article`
  /* border: 1px solid green; */
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 768px) {
    /* border: 3px solid blue; */
    width: 100%;
    height: 55%;
  }
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
  /* border: 1px solid blue; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95%;
  margin-top: 16px;
  /* overflow: auto; */
  @media (max-width: 768px) {
    /* border: 1px solid yellow; */
    margin-top: 0;
    /* padding:8px 0; */
    justify-content: flex-start;
    height: 100%;
  }
`;
export { Contain, TextArticle, InfoArticle, StyledSection, StyledDiv };
