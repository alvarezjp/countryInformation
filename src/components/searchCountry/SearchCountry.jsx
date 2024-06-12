const SearchCountry = ({ search, searchAction }) => {
    return (
      <form>
        <article>
          <label htmlFor="search">Buscar Paises </label>
          <input value={search} onChange={searchAction} />
        </article>
      </form>
    );
  };

  export default SearchCountry;