import styled from "styled-components";

const StyleH2 = styled.h2`
  font-size: 16px;
  color:red;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  /* border: 1px solid yellow; */
`;

const Section = styled.section`
  width: 80%;
  /* border: 1px solid pink; */
`;

const UserMessage = ({ search, searchActivation, nameFilter }) => {
    if (
      (search.length >= 1 && !searchActivation) ||
      (search.length >= 1 && nameFilter.length === 0)
    ) {
      return (
       <Section>
          <StyleH2>Make a more specific query</StyleH2>
       </Section>
        
      );
    }
  };

  export default UserMessage;