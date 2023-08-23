const bornYear = (age) => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
}
export const Hello = (props) => {
    const {name, age} = props;

    return (
        <div>
            <p>
                Hello {name}, you are {age} years ol
            </p>

            <p>So you were probably born in {bornYear(age)}</p>
        </div>
    )
}