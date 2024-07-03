import * as React from "react";

import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

import { useState } from "react";
import server from "../server.js";


const ViewWeather = ({ info }) => {
  const [tempMax, setTempMax] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [icon, setIcon] = useState("");

  const capital = info.capital[0];
  const code = info.cca2;

  const conversion = (temp) => {
    return Math.round(temp - 273.15);
  };

const esto = process.env.TIEMPO_CLIMA;
console.log("esto es -------->",esto)
  server
    .geoLocation(capital, code, process.env.TIEMPO_CLIMA)
    .then((response) => {
      const lat = response.data[0].lat;
      const lon = response.data[0].lon;
      const clave = process.env.PAIS_CIUDAD;

      server.weather(lat, lon, clave).then((response) => {
        setTempMax(conversion(response.data.main.temp_max));
        setTempMin(conversion(response.data.main.temp_min));
        setIcon(response.data.weather[0].icon);
      });
    });
  return (
    <>
      <Typography
        fontSize="xl"
        fontWeight="lg"
        sx={{ color: "white", marginTop: "8px" }}>
        Weather
      </Typography>
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
          <Typography
            level="body-xs"
            fontWeight="lg"
            sx={{ textAlign: "center" }}>
            Maximum temperature
          </Typography>
          <Typography fontWeight="lg" sx={{ textAlign: "center" }}>
            {tempMax} °C{" "}
          </Typography>
        </div>
        <div>
          <Typography
            level="body-xs"
            fontWeight="lg"
            sx={{ textAlign: "center" }}>
            Minimum Temperature
          </Typography>
          <Typography fontWeight="lg" sx={{ textAlign: "center" }}>
            {tempMin} °C{" "}
          </Typography>
        </div>
      </Sheet>
    </>
  );
};

export default ViewWeather;
