import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import DetailView from "../detailView/DetailView.jsx";

import Button from "@mui/material/Button";
import styled from "styled-components";

const ContainFilter = styled.article`
  /* height: 100vh;
width: 100%; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-top: 50px;
  /* border: 1px solid blue; */
`;


const FilteredCountries = ({ nameFilter, obtainInfo, name, btnDetails }) => {
  
  return (
    <>
      <h2>Nombre de paises</h2>

      <ContainFilter>
        {nameFilter.map((country, id) => {
          const info = name.find(
            (country) =>
              country.name.common.toLowerCase() === nameFilter[id].toLowerCase()
          );
          
          return (
            <Card
              variant="outlined"
              orientation="horizontal"
              sx={{
                width: 320,
                "&:hover": {
                  boxShadow: "md",
                  borderColor: "neutral.outlinedHoverBorder",
                },
              }}>
              <AspectRatio ratio="1.4" sx={{ width: 90 }}>
                <img
                  src={info.flags.png}
                  loading="lazy"
                  alt=""
                  style={{
                    objectFit: "cover",
                    objectPosition: "left top",
                  }}
                />
              </AspectRatio>
              <CardContent>
                <Typography level="title-lg" id="card-description">
                  {country}
                </Typography>
                <Chip
                  variant="outlined"
                  color="primary"
                  size="sm"
                  sx={{ cursor: "pointer", marginTop: "8px" }}
                  onClick={() => obtainInfo(country)}>
                  Ver mas
                </Chip>
              </CardContent>
              {/* <DetailView
                country={country}
                btnDetails={btnDetails}
                name={name}
              /> */}
            </Card>
          );
        })}
      </ContainFilter>
    </>
  );
};

export default FilteredCountries;
