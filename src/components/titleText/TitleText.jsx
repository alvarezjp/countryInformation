import styled from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  gap: 8px;
`;

const TextH1 = styled.h1`
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  font-size: 56px;
  color: white;
  line-height: 64px;

  @media (max-width: 768px) {
    font-size: 42px;
    line-height: 54px;
  }
  @media (max-width: 320px) {
    font-size: 40px;
    /* line-height: 54px; */
  }
`;
const TextH2 = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-weight: 300;
  font-size: 42px;
  color: white;
  line-height: 54px;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 44px;
  
  }
  @media (max-width: 320px) {
    font-size: 30px;
    line-height: 44px;
  
  }
`;

const TitleText = () => {
  return (
    <Article>
      <TextH1>Welcome to Country Finder! </TextH1>
      <TextH2>Discover detailed information and climate data for any nation</TextH2>
    </Article>
  );
};

export default TitleText;
