import Paises from "../paises/Paises.jsx";
import FilteredCountries from "../filteredCountries/FilteredCountries.jsx";
import CountryDetail from "../countryDetail/CountryDetail.jsx";
import Sheet from "@mui/joy/Sheet";
import Radio from "@mui/joy/Radio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";

const CountryVisualization = ({
  name,
  searchActivation,
  nameFilter,
  search,
  obtainInfo,
  btnDetails,
}) => {
  {
    if (searchActivation && nameFilter.length > 1 && btnDetails == "") {
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
    if (btnDetails != "" && nameFilter.length > 1 && searchActivation) {
      return (
        <>
          <CountryDetail nameFilter={btnDetails} name={name} />
        </>
      );
    }
  }
};

export default CountryVisualization;
