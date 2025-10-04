import { useState } from 'react'
import Person from './components/Person'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: '20-09-63-52'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <input value={newName} 
        onChange={handleNameChange}
        />
        <input value={newNumber} 
        onChange={handleNumberChange}
        />
        <button type="submit">save</button>
      </form>   
     
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