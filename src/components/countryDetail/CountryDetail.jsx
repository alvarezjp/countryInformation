import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import ViewWeather from "../viewWeather/ViewWeather.jsx";
import BtnInfoCountry from "../btnInfoCountry/BtnInfoCountry.jsx";

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
          width: "100%",
          position: "relative",
          overflow: { xs: "auto", sm: "initial" },
        }}>
        <Card
          orientation="horizontal"
          sx={{
            width: "100%",
            flexWrap: "wrap",
            [`& > *`]: {
              "--stack-point": "500px",
              minWidth:
                "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
            },
            // make the card resizable for demo
            overflow: "auto",
            resize: "horizontal",
          }}>
          <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 275,textAlign:"center"}}>
            <img
              src={info.flags.png}
              srcSet={info.flags.png}
              loading="lazy"
              alt=""
              style={{ width: "100%" ,objectFit: "contain", objectPosition: "center" }}
            />
          </AspectRatio>
          <CardContent>
            <Typography fontSize="xl" fontWeight="lg">
              {info.name.common}
            </Typography>
            {/* <Typography
              level="body-sm"
              fontWeight="lg"
              textColor="text.tertiary">
              Capital: {info.capital}
            </Typography> */}
            <Sheet
              sx={{
                bgcolor: "background.level1",
                borderRadius: "sm",
                p: 1.5,
                my: 1.5,
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                "& > div": { flex: 1 },
              }}>
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Area
                </Typography>
                <Typography fontWeight="lg">{info.area} Km</Typography>
              </div>
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  languages
                </Typography>
                <Typography fontWeight="lg">
                  <>
                    
                    {languages.map((names) => {
                      return <ul key={names}>{names}</ul>;
                    })}
                    
                  </>
                </Typography>
              </div>
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Capital
                </Typography>
                <Typography fontWeight="lg">{info.capital}</Typography>
              </div>
            </Sheet>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default CountryDetail;
