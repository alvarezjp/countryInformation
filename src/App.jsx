import { useState, useEffect, Component } from "react";
import server from "./components/server";
import SearchCountry from "./components/searchCountry/SearchCountry.jsx";
import UserMessage from "./components/userMessage/UserMessage.jsx";
import CountryVisualization from "./components/countryVIsualization/CountryVIsualization.jsx";
import styled from "styled-components";
import "./reset.css"

const StyledArticle = styled.article`
border: 3px solid blue;
height: 100vh;
background-color: transparent;
z-index: 1;
`
const Fondo = styled.div`
border: 3px solid red;
height: 100vh;
width: 100vw;
background-image: url("../public/img/fondo.jpg");
background-size: cover;
filter: blur(3px);
z-index: 0;
position: absolute;
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
    <StyledArticle>
      <Fondo/>
      <h1>Api de Paises</h1>
      <SearchCountry search={search} searchAction={searchAction} />
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
    </StyledArticle>
  );
};



export default App;
