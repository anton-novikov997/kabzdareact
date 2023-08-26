import React from "react";

type PropsStar = {
    selected: boolean
    onChange: (ratingNumber: number) => void
    value:number
}

export function Star(props: PropsStar) {
    // if (props.selected) {
    //     return <b>star </b>
    // } else {
    //     return <span>star </span>
    // }

    return (<span>
        <span onClick={() => props.onChange(props.value)}> {props.selected ? <b>star </b> : "star"}</span>
        </span>
    )

}