import React, {useState} from "react";



type Collaps = boolean

export function Onoff() {
    let [collapsed, setCollapsed] = useState<Collaps>(false)
    const all = {
        display: "flex",
        justifyContent:"space-around",
        width:"200px"
    }
    const forOn = {
        border:"solid",
        backgroundColor:collapsed?"green":"white"
    }
    const forOff = {
        border:"solid",
        backgroundColor:collapsed?"white":"red"
    }
    const forCircle = {
        border:"solid",
        width: "25px",
        height: "25px",
        borderRadius:"20px",
        backgroundColor:collapsed?"green":"red"
    }

    return (
        <div style={all}>
            <div style={forOn} onClick={()=>setCollapsed(!collapsed)}>On</div>
            <div style={forOff} onClick={()=>setCollapsed(!collapsed)}>Of</div>
            <div style={forCircle}></div>
        </div>
    )
}