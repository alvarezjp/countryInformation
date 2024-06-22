import { useState, useEffect, Component } from "react";
import server from "./components/server";
import SearchCountry from "./components/searchCountry/SearchCountry.jsx";
import UserMessage from "./components/userMessage/UserMessage.jsx";
import CountryVisualization from "./components/countryVIsualization/CountryVIsualization.jsx";
import "./reset.css";
import { Contain,InfoArticle,TextArticle, StyledSection,StyledDiv } from "./styled";
import TitleText from "./components/titleText/TitleText.jsx";





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
      <TextArticle>
        <TitleText/>
      </TextArticle>
      <InfoArticle>
        
      </InfoArticle>
      {/* <StyledSection>
        <h1>Informacion de Paises</h1>
        {!btnDetails[0] && (
          <SearchCountry search={search} searchAction={searchAction} />
        )}
        <StyledDiv>
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
      </StyledSection> */}
    </Contain>
  );
};

export default App;
