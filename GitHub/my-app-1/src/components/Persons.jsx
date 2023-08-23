export const Persons = ({persons}) => {
    return (
        <div>
            <ul>
                {persons.map((pers, i) =>
                    <li key={`uuid-${i}-${pers.name}`}>{pers.name} {pers.number}</li>
                )}
            </ul>
        </div>
    )
}