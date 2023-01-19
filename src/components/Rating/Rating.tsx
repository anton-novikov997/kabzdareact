import React from "react";
type RatingPropsType={
    value:number
}
export const Rating = (props:RatingPropsType) => {
    return (<div>
            <Star selected={props.value>0}/>
            <Star selected={props.value>1}/>
            <Star selected={props.value>2}/>
            <Star selected={props.value>3}/>
            <Star selected={props.value>4}/>
        </div>
    )
}
type StarProps={
    selected:boolean
}

function Star(props:StarProps) {
    return <span>{props.selected?<b> star </b>:" star "}</span>
    // if (props.selected){
    //     return  <span> <b>star</b> </span>
    // }else{
    //     return <span> star </span>
    // }
    // return <>
    //     <span> <b>star</b> </span>
    // </>
}