import React, {useState} from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string; name?: string }>
    address: { street: { title: string } }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useAndiState(m:string) {
    return [m, function () {}]
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    //const {title, man, ...restProps} = props
        const [messages, setmessages] = useAndiState('Hello')
    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
            {props.car.model}
        </div>
    </div>
}