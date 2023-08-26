import React from "react";
type PropsTitle={
    title:string
    onClick:()=>void
}
export function UncontolldeAccordionTitle(props:PropsTitle) {
    return (
        <div><h3 onClick={()=>props.onClick()}>{props.title}</h3></div>
    )
}