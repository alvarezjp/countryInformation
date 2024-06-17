import BtnInfoCountry from "../btnInfoCountry/BtnInfoCountry.jsx";
import DetailView from "../detailView/DetailView.jsx";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const ContainFilter = styled.article`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 10px;
justify-content: center;
`

const FilteredCountries = ({ nameFilter, obtainInfo, name, btnDetails }) => {
  return (
    // <>
    //   <h2>Nombre de paises</h2>
    //   <ol>
    //     {nameFilter.map((country, id) => {
    //       const info = name.find(
    //         (country) =>
    //           country.name.common.toLowerCase() === nameFilter[id].toLowerCase()
    //       );
    //       console.log(info);
    //       return (
    //         <div key={id}>
    //           <li key={country}>
    //             {country}
    //             <BtnInfoCountry
    //               country={country}
    //               obtainInfo={obtainInfo}
    //               name={name}
    //             />
    //           </li>
    //           <DetailView
    //             country={country}
    //             btnDetails={btnDetails}
    //             name={name}
    //           />
    //           <img src={info.flags.png} alt="" />
    //         </div>
    //       );
    //     })}
    //   </ol>
    // </>
    <ContainFilter>
      {nameFilter.map((country, id) => {
        const info = name.find(
          (country) =>
            country.name.common.toLowerCase() === nameFilter[id].toLowerCase()
        );
        console.log(info);
        return (
          <Card sx={{ maxWidth: 250,maxHeight:260}}>
            <CardMedia
              sx={{ height: 140 , width:250}}
              image={info.flags.png}
              title="green iguana"
            />
            <CardContent sx={{ paddingBottom: 0 }}>
              <Typography gutterBottom variant="h5" component="div">
                {country}
              </Typography>
            </CardContent>
            <CardActions sx={{ paddingTop: 0 }}>
              <Button size="medium">Ver mas</Button>
            </CardActions>
          </Card>
        );
      })}
    </ContainFilter>
  );
};

export default FilteredCountries;
