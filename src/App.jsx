import { useState, useEffect, Component } from "react";
import server from "./components/server";
import SearchCountry from "./components/searchCountry/SearchCountry.jsx";
import UserMessage from "./components/userMessage/UserMessage.jsx";
import CountryVisualization from "./components/countryVIsualization/CountryVIsualization.jsx";
import styled from "styled-components";
import "./reset.css";

const Contain = styled.article`
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: 1;
  background-image: url("img/fondo.jpg");
  background-size: cover;
`;
const Filter = styled.div`
  width: 95%;
  height: 90%;
  left: 2.5%;
  top: 5%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  z-index: 0;
  position: absolute;
  border-radius: 40px;
  /* border: 5px solid blue; */
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

`

const App = () => {
  const [name, setName] = useState([]);
  const [search, setSearch] = useState("");
  const [nameFilter, setNameFilter] = useState([]);
  const [searchActivation, setSearchActivation] = useState(false);
  const [btnDetails, setBtnDetails] = useState([""]);

  useEffect(() => {
    server.getAll().then((response) => setName(response.data));
  }, []);

  useEffect(() => {
    const data = search.toLocaleLowerCase();
    const rest = name.filter((dato) =>
      dato.name.common.toLocaleLowerCase().includes(data)
    );
    const nameCountry = rest.map((dato) => dato.name.common);

    if (data !== "" && nameCountry.length <= 10) {
      setNameFilter(nameCountry);
      setSearchActivation(true);
    } else {
      setSearchActivation(false);
    }
  }, [search, name]);

  const inputSearch = (event) => {
    setSearch(event.target.value);
  };

  const searchAction = (event) => {
    inputSearch(event);
  };

  const obtainInfo = (searchedName) => {
    const country = searchedName.toLowerCase();
    if (country === btnDetails[0]) {
      setBtnDetails([""]);
    } else {
      setBtnDetails([searchedName.toLowerCase()]);
    }
  };

  return (
    <Contain>
      <Filter />
      <StyledSection>
        <h1>Informacion de Paises</h1>
        {!btnDetails[0] && <SearchCountry search={search} searchAction={searchAction} />}        <StyledDiv>
          <UserMessage
            search={search}
            searchActivation={searchActivation}
            nameFilter={nameFilter}
          />
          <CountryVisualization
            name={name}
            searchActivation={searchActivation}
            nameFilter={nameFilter}
            obtainInfo={obtainInfo}
            btnDetails={btnDetails}
          />
        </StyledDiv>
      </StyledSection>
    </Contain>
  );
};

export default App;
