const Country = ({ country, onShow}) => {
    return (
        <li>{country.name.common} 
         <button onClick={() => onShow(country)}>show</button>
        </li>
    )
  }
  
  export default Country