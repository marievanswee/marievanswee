export const Content = ({parts}) => {
    return (
        <div>
            {parts.map(par => <Part key={par.id} part={par}/>)}
        </div>
    )
}