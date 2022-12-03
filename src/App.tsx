import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Accordion/>
            <Rating/>
        </div>
    );
}

const Rating = () => {
    return (<div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </div>
    )
}
const Accordion = () => {
    return (<div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
