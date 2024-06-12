const Paises = ({ name }) => {
    return (
      <>
        <h2>Nombre de paises</h2>
        {name.map((nombre) => {
          return <li key={nombre.name.common}>{nombre.name.common}</li>;
        })}
      </>
    );
  };

  export default Paises;