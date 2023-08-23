import {useState} from "react";

export const Filter = (props) => {
    const {setPersons, persons} = props
    const [newFilter, setNewFilter] = useState('')
    const changeFilter = (event) => {
        setNewFilter(event.target.value);
        if(event.target.value == '') {
            setPersons(persons)
        } else {
            const listPers = persons.filter(pers => pers.name.toLowerCase().includes(newFilter.toLowerCase()))
            setPersons(listPers)
        }

    }
    return (
        <div>filter shown with: <input value={newFilter} onChange={changeFilter}/></div>
    )
}