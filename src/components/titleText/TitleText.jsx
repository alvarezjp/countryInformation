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
`;
const TextH2 = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-weight: 300;
  font-size: 45px;
  color: white;
  line-height: 54px;
`;

const TitleText = () => {
  return (
    <Article>
      <TextH1>Welcome to Country Finder! </TextH1>
      <TextH2>Discover detailed info and climate of any nation.</TextH2>
    </Article>
  );
};

export default TitleText;
