import { useState, useEffect } from 'react'
import CountryService from './service/country'
import Country from './components/country'
import CountryDetails from './components/CountryDetails'


const Filter = ({ value, onChange }) => (
  <div>
    Filter shown with <input value={value} onChange={onChange} />
  </div>
)


const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('') 

  useEffect(() => {
    CountryService.getAll().then((initialCountry) => {
      console.log('getAll promise fulfilled')
      setCountries(initialCountry)
    })
  }, [])

  console.log('render', countries.length, 'countries')

  const handleFilterChange = (event) => setFilter(event.target.value)

  const countriesToShow = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )
  
  return (
    <div>
      <h2>Find countries</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      {filter && (
        <>
          {countriesToShow.length > 10 ? (
            <p>Too many matches, specify another filter</p>
          ) : countriesToShow.length > 1 ? (
            <ul>
              {countriesToShow.map(c => (
                <Country key={c.cca3} country={c} />
              ))}
            </ul>
          ) : countriesToShow.length === 1 ? (
            <CountryDetails country={countriesToShow[0]} />
          ) : (
            <p>No matches found</p>
          )}
        </>
      )}
    </div>
  )
}

export default App