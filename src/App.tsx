import React, {useState} from 'react';
import './App.css';
import {Onoff} from "./components/OnOf/Onoff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontolledRating/UncontrolledRating";


function App() {
    let [accordionTitle, setAccordionTitle] = useState<boolean>(false)
    return (
        <div className="App">
            {/*<Onoff/>*/}
            {/*<br/>*/}
            {/*<UncontrolledAccordion title={"Hehei"} />*/}
            <UncontrolledRating/>

        </div>
    );
}


export default App;
