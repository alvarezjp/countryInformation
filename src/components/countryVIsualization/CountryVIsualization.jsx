import Paises from "../paises/Paises.jsx";
import FilteredCountries from "../filteredCountries/FilteredCountries.jsx";
import CountryDetail from "../countryDetail/CountryDetail.jsx";

const CountryVisualization = ({
  name,
  searchActivation,
  nameFilter,
  search,
  obtainInfo,
  btnDetails,
}) => {
  {
    // if (!searchActivation) {                ---> visualizacion de paises
    //   return (
    //     <>
    //       <Paises name={name} />
    //     </>
    //   );
    // }
    if (searchActivation && nameFilter.length > 1) {
      return (
        <>
          <FilteredCountries
            nameFilter={nameFilter}
            obtainInfo={obtainInfo}
            name={name}
            btnDetails={btnDetails}
          />
        </>
      );
    }
    if (searchActivation && nameFilter.length === 1) {
      return (
        <>
          <CountryDetail nameFilter={nameFilter} name={name} search={search} />
        </>
      );
    }
  }
};

export default CountryVisualization;
