import React, {useState} from "react";

type PropsType = {
    title: string

}

export function UncontrolledAccordion(props: PropsType) {
    let [collapsed,setCollapsed]=useState(false)
    return <>
        <AccordionTitle title={props.title} />
        <button onClick={()=>setCollapsed(!collapsed)}>Toggle</button>
        {!collapsed && <AccordionBody/>}
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
