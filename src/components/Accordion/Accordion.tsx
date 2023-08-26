
import React from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordionBody";

type PropsAcc={
    title:string
    onclick:(collapsed:boolean)=>void
    collapsed:boolean
}
export function Accordion(props:PropsAcc) {
    return (
        <div>
            <AccordionTitle title={props.title} onClick={()=>props.onclick(!props.collapsed)} value={props.collapsed}/>
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}