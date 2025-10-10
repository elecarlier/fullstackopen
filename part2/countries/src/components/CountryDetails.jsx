const CountryDetails = ({ country}) => {
    const name = country.name.common
    const capital = country.capital?.[0]
    const area = country.area
    const flag = country.flags?.png ?? ''
    const languages = country.languages ? Object.values(country.languages) : []


    return (
        <div>
            <h2>{name}</h2>   
            <p>Capital : {capital}</p>
            <p> Area: {area}</p>

            <h4> Languages: </h4>
            {languages.map(lang => (
          <li key={lang}>{lang}</li>
        ))}
        <p> Flag:</p>
        <ul> 
            {flag && <img src={flag} alt={`Flag of ${name}`} width="150" />}</ul>
        </div>
    )
  }
  
  export default CountryDetails