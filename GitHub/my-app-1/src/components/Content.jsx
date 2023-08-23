export const Content = (props) => {
    const {parts} = props
    return (
        <div>
            {parts.map(par => <Part key={par.id} part={par}/>)}
        </div>
    )
}