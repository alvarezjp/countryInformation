import { useState, useEffect, Component } from "react";
import server from "./components/server";
import SearchCountry from "./components/searchCountry/SearchCountry.jsx";
import UserMessage from "./components/userMessage/UserMessage.jsx";
import CountryVisualization from "./components/countryVIsualization/CountryVIsualization.jsx";
import Button from "@mui/joy/Button";
import TitleText from "./components/titleText/TitleText.jsx";
import ImgHero from "./components/ImgHero/ImgHero.jsx";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import Grid from "@mui/material/Grid";
import "./reset.css";
import {
  Contain,
  InfoArticle,
  TextArticle,
  StyledSection,
  StyledDiv,
} from "./styled";

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
        <Grid container spacing={2} sx={{width:"100%"}}>
          <Grid item xs={12} md={12} sx={{ display:"flex",justifyContent:"center" }}>
            <TitleText />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{height: "50px",display:"flex",justifyContent:"center"
             }}>
            {!btnDetails[0] ? (
              <SearchCountry search={search} searchAction={searchAction} />
            ) : (
              <Button
                color="neutral"
                variant="soft"
                sx={{
                  borderRadius: "16px",
                  width: "80%",
                  height: "40px",
                }}
                onClick={() => obtainInfo(btnDetails[0])}
                startDecorator={<KeyboardArrowLeft />}>
                Volver
              </Button>
            )}
          </Grid>
          <Grid item xs={11} md={12} sx={{height:"40px",display:"flex",justifyContent:"center"  }}>
            <UserMessage
              search={search}
              nameFilter={nameFilter}
              searchActivation={searchActivation}
            />
          </Grid>
        </Grid>
        {/* <TitleText />
        <div style={{border:"1px solid blue",width:"100%",height:"10%"}}>
          {!btnDetails[0] ? (
            <SearchCountry search={search} searchAction={searchAction} />
          ) : (
            <Button
              color="neutral"
              size="md"
              variant="soft"
              sx={{
                borderRadius: "16px",
                width: "80%",
              }}
              onClick={() => obtainInfo(btnDetails[0])}
              startDecorator={<KeyboardArrowLeft />}>
              Volver
            </Button>
          )}
          <UserMessage
            search={search}
            nameFilter={nameFilter}
            searchActivation={searchActivation}
          />
        </div> */}
      </TextArticle>
      {/* --------------------------------------- */}

      <InfoArticle>
        <section
          style={{
            width: "100%",
            height: "100%",
            display: searchActivation ? "none" : "block",
          }}>
          <ImgHero />
        </section>
        <section
          style={{
            width: "100%",
            height: "100%",
            display: !searchActivation ? "none" : "block",
          }}>
          <StyledDiv>
            <CountryVisualization
              name={name}
              searchActivation={searchActivation}
              nameFilter={nameFilter}
              obtainInfo={obtainInfo}
              btnDetails={btnDetails}
            />
          </StyledDiv>
        </section>
      </InfoArticle>
    </Contain>
  );
};

export default App;
