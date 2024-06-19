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
    // <article style={{ background: "#F5F5F5" }}>
    //   <h2>Temperatura</h2>
    //   <img
    //     src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
    //     alt=""
    //     style={{ width: "100px" }}
    //   />
    //   <p>Temperatura Minima: {tempMin} °C</p>
    //   <p>Temperatura Maxima: {tempMax} °C</p>
    // </article>
    <Card
      data-resizable
      sx={{
        textAlign: "center",
        alignItems: "center",
        width: 343,
        // to make the demo resizable
        overflow: "auto",
        resize: "horizontal",
        "--icon-size": "100px",
      }}>
      <CardOverflow variant="solid" color="warning">
        <AspectRatio
          variant="outlined"
          color="warning"
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
          <div style={{ backgroundColor:"#433937" }}>
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt=""
              style={{ width: 100 }}
            />
          </div>
        </AspectRatio>
      </CardOverflow>
      <Typography level="title-lg" sx={{ mt: "calc(var(--icon-size) / 2)" }}>
        Tiempo
      </Typography>
      <CardContent sx={{ maxWidth: "40ch" }}>
        <Typography variant="body" color="text.secondary">
          Temperatura Minima: {tempMin} °C
        </Typography>
        <Typography variant="body" color="text.secondary">
          Temperatura Maxima: {tempMax} °C
        </Typography>
      </CardContent>
      
    </Card>
  );
};

export default ViewWeather;
