import { useState } from 'react'
import Person from './components/Person'

const Filter = ({ value, onChange }) => (
  <div>
    Filter shown with <input value={value} onChange={onChange} />
  </div>
)


const PersonForm = ({ name, number, onNameChange, onNumberChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    name <input value={name} onChange={onNameChange} />
    <br />
    number <input value={number} onChange={onNumberChange} />
    <br />
    <button type="submit">save</button>
  </form>
)



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])


  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('') 

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')

  }
  const handleNameChange = (event) => setNewName(event.target.value)

  const handleNumberChange = (event) => setNewNumber(event.target.value)
  
  const handleFilterChange = (event) => setFilter(event.target.value)

  const personsToShow = persons.filter(person => 
    person.name
      .toLowerCase()
      .split(' ')          
      .some(word => word.startsWith(filter.toLowerCase()))
  )
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ul>
      {personsToShow.map(person => 
        <Person key={person.name} person={person} />
      )}
      </ul>
      <PersonForm
        name={newName}
        number={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        onSubmit={addPerson}
      />
     
      <h2>Numbers</h2>
      <ul>
      {persons.map(person => 
        <Person key={person.name} person={person} />
      )}
      </ul>
    </div>
  )
}

export default App