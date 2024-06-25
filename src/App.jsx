import { useState, useEffect, Component } from "react";
import server from "./components/server";
import SearchCountry from "./components/searchCountry/SearchCountry.jsx";
import UserMessage from "./components/userMessage/UserMessage.jsx";
import CountryVisualization from "./components/countryVIsualization/CountryVIsualization.jsx";
import "./reset.css";
import {
  Contain,
  InfoArticle,
  TextArticle,
  StyledSection,
  StyledDiv,
} from "./styled";
import Button from "@mui/joy/Button";
import TitleText from "./components/titleText/TitleText.jsx";
import ImgHero from "./components/ImgHero/ImgHero.jsx";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";

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
        <TitleText />
        {!btnDetails[0] ? (
          <SearchCountry search={search} searchAction={searchAction} />
        ) : (
          <Button
            color="neutral"
            size="lg"
            variant="soft"
            sx={{
              borderRadius:"16px",
              width: "80%",
            }}
            onClick={() => obtainInfo(btnDetails[0])}
            startDecorator={<KeyboardArrowLeft />}>
            Volver
          </Button>
        )}
        <UserMessage search={search} nameFilter={nameFilter} searchActivation={searchActivation}/>
      </TextArticle>
      <InfoArticle>
        {(!searchActivation && <ImgHero />) || (
          <>
            {/* <UserMessage
              search={search}
              searchActivation={searchActivation}
              nameFilter={nameFilter}
            /> */}
            <StyledDiv>
              <CountryVisualization
                name={name}
                searchActivation={searchActivation}
                nameFilter={nameFilter}
                obtainInfo={obtainInfo}
                btnDetails={btnDetails}
              />
            </StyledDiv>
          </>
        )}
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
