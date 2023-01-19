import React, {useState} from "react";

type PropsType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: PropsType) {
    return <>
        <AccordionTitle title={props.title}/>
        {!props.collapsed && <AccordionBody/>}
    </>
}

type PropsTypeAccTitle = {
    title: string
}
export const AccordionTitle = (props: PropsTypeAccTitle) => {
    return (<div>
        <h3>{props.title}</h3>
    </div>)
}

export function AccordionBody() {
    return (<div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>)
}
