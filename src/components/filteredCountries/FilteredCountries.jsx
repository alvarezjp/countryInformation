import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
// import Chip from "@mui/joy/Chip";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import DetailView from "../detailView/DetailView.jsx";

// import Button as "boton" from "@mui/material/Button";
import styled from "styled-components";

const ContainFilter = styled.article`
  display: flex;
  width: 320px;
  /* height: 100%; */
  flex-wrap: wrap;
  gap: 20px;
  /* padding-right: 50px; */
  justify-content: center;
  /* border: 1px solid red; */
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
`;

const FilteredCountries = ({ nameFilter, obtainInfo, name, btnDetails }) => {
  return (
    <>
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
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                border: "1px solid",
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
                <Typography
                  level="title-lg"
                  id="card-description"
                  sx={{ color: "black" }}>
                  {country}
                </Typography>
                <Button
                  onClick={() => obtainInfo(country)}
                  color="neutral"
                  variant="outlined"
                  size=""
                  sx={{
                    marginTop: "8px",
                    color: "black",
                    border: "1px solid black",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      color: "white",
                    },
                  }}>
                  Ver mas
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </ContainFilter>
    </>
  );
};

export default FilteredCountries;
