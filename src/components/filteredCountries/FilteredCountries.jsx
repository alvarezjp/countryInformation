import BtnInfoCountry from "../btnInfoCountry/BtnInfoCountry.jsx";
import DetailView from "../detailView/DetailView.jsx";

const FilteredCountries = ({ nameFilter, obtainInfo, name, btnDetails }) => {
  return (
    <>
      <h2>Nombre de paises</h2>
      <ol>
        {nameFilter.map((country, id) => {
          return (
            <div key={id} >
              <li key={country}>
                {country}
                <BtnInfoCountry
                  country={country}
                  obtainInfo={obtainInfo}
                  name={name}
                />
              </li>
              <DetailView
                country={country}
                btnDetails={btnDetails}
                name={name}
              />
            </div>
          );
        })}
      </ol>
    </>
  );
};

export default FilteredCountries;
