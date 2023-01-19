import React, {useState} from "react";

type RatingPropsType = {}
export const UncontrolledRating = (props: RatingPropsType) => {
    let [value, setValue] = useState(0)



    return (<div>
            <Star selected={value > 0} setValue={setValue}/>
            <Star selected={value > 1} setValue={setValue}/>
            <Star selected={value > 2} setValue={setValue}/>
            <Star selected={value > 3} setValue={setValue}/>
            <Star selected={value > 4} setValue={setValue}/>
        </div>
    )
}
type StarProps = {
    selected: boolean

    setValue:(value:number)=>void
}

function Star(props: StarProps) {
    debugger
    return <span>{props.selected ? <b> star </b> : " star "}</span>
    // if (props.selected){
    //     return  <span> <b>star</b> </span>
    // }else{
    //     return <span> star </span>
    // }
    // return <>
    //     <span> <b>star</b> </span>
    // </>
}