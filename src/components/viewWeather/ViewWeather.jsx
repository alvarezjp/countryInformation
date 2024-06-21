import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";



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

  server
    .geoLocation(capital, code, import.meta.env.VITE_ALGO)
    .then((response) => {
      const lat = response.data[0].lat;
      const lon = response.data[0].lon;
      const clave = import.meta.env.VITE_SOME_KEY;

      server.weather(lat, lon, clave).then((response) => {
        setTempMax(conversion(response.data.main.temp_max));
        setTempMin(conversion(response.data.main.temp_min));
        setIcon(response.data.weather[0].icon);
      });
    });
  return (
    <Card
      data-resizable
      sx={{
        textAlign: "center",
        alignItems: "center",
        width: " 100%",
        height: "70%",
        // to make the demo resizable
        overflow: "auto",
        resize: "horizontal",
        "--icon-size": "100px",
        backgroundColor: "white",
      }}>
      <CardOverflow variant="solid" style={{ backgroundColor: "#E0F7FA" }}>
        <AspectRatio
          variant="outlined"
          color="#E0F7FA"
          ratio="1"
          sx={{
            m: "auto",
            transform: "translateY(50%)",
            borderRadius: "50%",
            width: "var(--icon-size)",
            boxShadow: "sm",
            bgcolor: "background.surface",
            position: "relative",
          }}>
          <div style={{ backgroundColor: "#D3D3D3" }}>
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt=""
              style={{ width: "100px" }}
            />
          </div>
        </AspectRatio>
      </CardOverflow>
      <Typography level="title-lg" sx={{ mt: "calc(var(--icon-size) / 2)" }}>
        Tiempo para hoy
      </Typography>
      <CardContent sx={{ maxWidth: "40ch" }}>
        <Typography variant="body" color="text.secondary">
          <Typography
            level="title-lg"
            sx={{ mt: "calc(var(--icon-size) / 2)" }}>
            Temperatura minima:  
          </Typography>
           {tempMin} °C
        </Typography>
        <Typography variant="body" color="text.secondary">
          Temperatura maxima: {tempMax} °C
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ViewWeather;
