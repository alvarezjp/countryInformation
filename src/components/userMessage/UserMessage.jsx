import styled from "styled-components";

const StyleH2 = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  /* margin-top: 1rem; */
  color:red
`;

const UserMessage = ({ search, searchActivation, nameFilter }) => {
    if (
      (search.length >= 1 && !searchActivation) ||
      (search.length >= 1 && nameFilter.length === 0)
    ) {
      return (
        <>
          <StyleH2>Realiza una consulta mas especifica</StyleH2>
        </>
      );
    }
  };

  export default UserMessage;