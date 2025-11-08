import { useState, useEffect } from 'react'
import Person from './components/Person'
import PersonService from './services/persons'
import Notification from './components/Notification'

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
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('') 
  const [errorMessage, setErrorMessage] = useState('some error happened...')


  useEffect(() => {
    PersonService.getAll().then((initialPerson) => {
      console.log('getAll promise fulfilled')
      setPersons(initialPerson)
    })
  }, [])

  console.log('render', persons.length, 'person')


  const addPerson = (event) => {
    event.preventDefault()
  
    const person = persons.find(p => p.name === newName)
  
    if (person) {
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
        const changedPerson = { ...person, number: newNumber }
  
        PersonService
          .update(person.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
            setNewName('')
            setNewNumber('')
            setErrorMessage(
              `Note '${person.name}' successfully added`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)    
          })
          .catch(error => {
            alert(`The person '${person.name}' was already deleted from the server`)
            setPersons(persons.filter(p => p.id !== person.id))
          })
      }

      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    PersonService.create(personObject).then((returnedPerson) => {
      console.log('create promise fulfilled')
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
      setErrorMessage(
        `'${returnedPerson.name}' successfully added`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)    
      console.log('After the alert name + ${returnedPerson.name}')
    })

  }
  const handleNameChange = (event) => setNewName(event.target.value)

  const handleNumberChange = (event) => setNewNumber(event.target.value)
  
  const handleFilterChange = (event) => setFilter(event.target.value)

  const personsToShow = Array.isArray(persons)
  ? persons.filter(person => 
      person.name
        .toLowerCase()
        .split(' ')          
        .some(word => word.startsWith(filter.toLowerCase()))
    )
  : [];


  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      PersonService.remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          alert(`The person '${name}' was already removed from server`)
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
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
        <Person key={person.name} 
          person={person}
          onDelete={() => deletePerson(person.id, person.name)}  />
      )}
      </ul>
    </div>
  )
}

export default App