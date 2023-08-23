import {Header} from "./Header.jsx";
import {Content} from "./Content.jsx";
import {Total} from "./Total.jsx";

export const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}


