const BtnInfoCountry = ({ country, obtainInfo, name }) => {
    return <button onClick={() => obtainInfo(country)}>Ver detalles</button>;
  };

  export default BtnInfoCountry;