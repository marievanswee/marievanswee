export const Total = ({parts}) => {
    let sum = parts.reduce(function(s, p){
        return s + p.exercises;
    }, 0);
    return (
        <div>
            <p>Number of exercises {sum}</p>
        </div>
    )
}