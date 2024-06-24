import styled from "styled-components";

const UserMessage = ({ search, searchActivation, nameFilter }) => {
    if (
      (search.length >= 1 && !searchActivation) ||
      (search.length >= 1 && nameFilter.length === 0)
    ) {
      return (
        <>
          <h2>Realiza una consulta mas especifica</h2>
        </>
      );
    }
  };

  export default UserMessage;