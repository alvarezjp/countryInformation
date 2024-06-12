import { useState } from "react";
import server from "../server.js"


const ViewWeather = ({ info }) => {
    const [tempMax, setTempMax] = useState(0);
    const [tempMin, setTempMin] = useState(0);
  
    const capital = info.capital[0];
    const code = info.cca2;
    server
      .geoLocation(capital, code, import.meta.env.VITE_ALGO)
      .then((response) => {
        const lat = response.data[0].lat;
        const lon = response.data[0].lon;
        const clave = import.meta.env.VITE_SOME_KEY;
        server.weather(lat, lon, clave).then((response) => {
          // console.log("dato dia ----->", response.data);
          setTempMax(response.data.data_day.temperature_max[0]);
          setTempMin(response.data.data_day.temperature_min[0]);
  
          // console.log(tempMax, tempMin);
        });
      });
    return (
      <article style={{background:"#F5F5F5"}}>
        <h2>Temperatura</h2>
        <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" style={{width:"100px"}}/>
        <p>Temperatura Minima: {tempMin} °C</p>
        <p>Temperatura Maxima: {tempMax} °C</p>
      </article>
    );
  };

  export default ViewWeather;