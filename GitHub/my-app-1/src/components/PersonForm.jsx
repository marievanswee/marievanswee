import {useState} from "react";

export const PersonForm = (props) => {
    const {persons, setPersons} = props
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const changeName = (event) => {
        setNewName(event.target.value);
    }

    const changeNumber = (event) => {
        setNewNumber(event.target.value);
    }

    const addPerson = (event) => {
        event.preventDefault();
        const person = {
            name: newName,
            number: newNumber
        }
        const listPers = persons.filter(person => pers.name === newName)
        if(listPers.length === 0) {
            setPersons(persons.concat(person))
            setNewName('')
            setNewNumber('')
        } else {
            alert(`${newName} already exist !`)
        }
    }

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={changeName}/>
            </div>
            <div>number: <input value={newNumber} onChange={changeNumber}/></div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}