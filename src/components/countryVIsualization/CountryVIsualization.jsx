import Paises from "../paises/Paises.jsx";
import FilteredCountries from "../filteredCountries/FilteredCountries.jsx";
import CountryDetail from "../countryDetail/CountryDetail.jsx";
import Sheet from "@mui/joy/Sheet";
import Radio from "@mui/joy/Radio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

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
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <CountryDetail nameFilter={btnDetails} name={name} />
            <Button
              color="neutral"
              size="md"
              variant="soft"
              onClick={() => obtainInfo(btnDetails[0])}
              endDecorator={<KeyboardArrowRight />}>
              Volver
            </Button>
          </Box>
        </>
      );
    }
  }
};

export default CountryVisualization;
