import React from "react";
type PropsTitle={
    title:string
    onClick:(collapsed:boolean)=>void
    value:boolean
}
export function AccordionTitle(props:PropsTitle) {
    return (
        <div><h3 onClick={()=>{props.onClick(props.value)}}>{props.title}</h3></div>
    )
}