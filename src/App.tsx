import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./OnOff/OnOff";
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    const [ratingNumber, setRatingNumber] = useState<number>(0)
   const [onOff,setOnOff]=useState(true)
    const [collapsed,setCollapsed]=useState(false)
    return (
        <div>
            Это есть компонента App
            <div>
                <Rating value={ratingNumber} onChange={setRatingNumber}/>
                <Accordion title={"Menu"} onclick={setCollapsed } collapsed={collapsed}/>
                {/*<UncontolldeAccordion title={"Menu"} collapsed={true}/>*/}
                {/*<UncontolldeAccordion title={"User"} collapsed={false}/>*/}
                <OnOff  value={onOff} onClick={setOnOff}/>
            </div>
        </div>
    );
}

export default App;
