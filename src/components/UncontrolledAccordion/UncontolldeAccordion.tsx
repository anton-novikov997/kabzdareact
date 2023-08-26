import {UncontolldeAccordionTitle} from "./UncontolldeAccordionTitle/UncontolldeAccordionTitle";
import {UncontolldeAccordionBody} from "./UncontolldeAccordionBody/UncontolldeAccordionBody";
import React, {useState} from "react";

type PropsAcc={
    title:string
    collapsed:boolean
}
export function UncontolldeAccordion(props:PropsAcc) {
    const [collapsed,setCollapsed]=useState(true)
    return (
        <div>
            <UncontolldeAccordionTitle title={props.title} onClick={()=>setCollapsed(!collapsed)}/>
            {!collapsed && <UncontolldeAccordionBody/>}
        </div>
    )
}