import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Divider from "@mui/joy/Divider";
import ViewWeather from "../viewWeather/ViewWeather.jsx";
import { alignProperty } from "@mui/material/styles/cssUtils.js";

const CountryDetail = ({ nameFilter, name }) => {
  const languages = [];
  const info = name.find(
    (country) =>
      country.name.common.toLowerCase() === nameFilter[0].toLowerCase()
  );
  for (const leg in info.languages) {
    if (Object.hasOwnProperty.call(info.languages, leg)) {
      const value = info.languages[leg];
      languages.push(value);
    }
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "350px",
          height: "550px", // cambiar a 100% en 768px
          position: "relative",
          boxSizing: "border-box",
          // overflow: { xs: "scroll", sm: "auto", md: "auto" },
          // border:"1px solid green",
          '@media (max-width: 320px)': {
            width: "95%",
          },

        }}
        >
        <Card
          orientation="horizontal"
          variant="plain"
          sx={{
            width: "350px",
            flexWrap: "wrap",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            [`& > *`]: {
              "--stack-point": "500px",
              minWidth:
                "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
            },
            // make the card resizable for demo
            overflow: "auto",
          }}>
          <AspectRatio
            flex
            ratio="1"
            maxHeight={182}
            variant="plain"
            sx={{ minWidth: 250, textAlign: "center" }}>
            <img
              src={info.flags.png}
              loading="lazy"
              alt=""
              style={{
                boxSizing: "border-box",
                width: "100%",
                objectFit: "contain",
                objectPosition: "center",
                backgroundColor: "transparent"
              }}
            />
          </AspectRatio>

          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            {/* aca es la tarjeta externa */}
            <Typography fontSize="xl" fontWeight="lg" sx={{ color: "white" }}>
              {info.name.common}
            </Typography>
            {/* <Typography
              level="body-sm"
              fontWeight="lg"
              textColor="text.tertiary"
              sx={{ color: "white" }}>
              {info.name.official}
            </Typography> */}
            <Sheet
              sx={{
                bgcolor: "background.level1",
                borderRadius: "sm",
                p: 1.5,
                my: 1.5,
                display: "flex",
                gap: 2,

                "& > div": { flex: 1 },
              }}>
              {/* aca es la tarjeta interna */}
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Capital
                </Typography>
                <Typography fontWeight="lg"> {info.capital} </Typography>
              </div>
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Languages
                </Typography>
                <Typography fontWeight="lg">
                  {languages.map((names) => {
                    return <ul key={names}>{names}</ul>;
                  })}
                </Typography>
              </div>
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Area
                </Typography>
                <Typography fontWeight="lg">{info.area} Km</Typography>
              </div>
            </Sheet>
            <Divider
              orientation="horizontal"
              sx={{ "--Divider-lineColor": "white" }}
            />
            <ViewWeather info={info} />
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default CountryDetail;
