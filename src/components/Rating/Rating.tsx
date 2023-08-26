import React from "react";
import {Star} from "./Star/Star";

type RatingProps = {
    value: number
    onChange: (ratingNumber: number) => void

}

export function Rating(props: RatingProps) {
    return (
        <div>
            <Star selected={props.value > 0} onChange={props.onChange} value={1}/>
            <Star selected={props.value > 1} onChange={props.onChange} value={2}/>
            <Star selected={props.value > 2} onChange={props.onChange} value={3}/>
            <Star selected={props.value > 3} onChange={props.onChange} value={4}/>
            <Star selected={props.value > 4} onChange={props.onChange} value={5}/>
        </div>

    )
}