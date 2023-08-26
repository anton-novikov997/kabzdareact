import React from 'react';

type Props = {
    onClick: (change: boolean) => void
    value: boolean
}
export const OnOff = (props: Props) => {
    const On = {
        backgroundColor: props.value ? "green" : "white",
        border: "1px solid black",
        margin: "1px"
    }
    const Off = {
        backgroundColor: props.value ? "white" : "red",
        border: "1px solid black",
        margin: "1px"
    }
    const Container = {
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        margin: "10px",
    }
    const Cirkle = {
        width: "20px",
        height: "20px",
        border: "1px solid",
        borderRadius: "50%",
        margin: "1px",
        backgroundColor: props.value ? "green" : "red"
    }
    return (
        <div style={Container}>
            <div style={On} onClick={() => {props.onClick(!props.value)}}> ON
            </div>
            <div style={Off} onClick={() => {props.onClick(!props.value)}}> OFF
            </div>
            <div style={Cirkle}></div>
        </div>
    );
};

