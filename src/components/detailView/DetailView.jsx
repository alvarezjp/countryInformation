import CountryDetail from "../countryDetail/CountryDetail.jsx"

const DetailView = ({ country, btnDetails, name }) => {
  {
    if (country.toLowerCase() === btnDetails[0]) {
      return (
        <>
          <CountryDetail nameFilter={btnDetails} name={name}  />
        </>
      );
    }
  }
};

export default DetailView;
