import { useState, useEffect } from 'react'
import CountryService from './service/country'
import Country from './components/country'


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

  const CountryToShow = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )
  
  return (
    <div>
      <h2>Find countries</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ul>
      {CountryToShow.map(country => 
        <Country key={country.name.common} country={country}/>
      )}
    </ul>
    </div>
  )
}

export default App