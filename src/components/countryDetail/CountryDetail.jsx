import ViewWeather from "../viewWeather/ViewWeather.jsx";

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
        <h2>{info.name.common}</h2>
        <p>
          Su capital es: <b>{info.capital}</b>
        </p>
        <p>
          Su ares es: <b>{info.area}</b>
        </p>
        <p>Los idiomas que hablan son:</p>
        <ol>
          {languages.map((names) => {
            return <li key={names}>{names}</li>;
          })}
        </ol>
        <h3>Bandera</h3>
        <img src={info.flags.png} alt="" />
        <ViewWeather info={info} />
        
      </>
    );
  };

  export default CountryDetail;