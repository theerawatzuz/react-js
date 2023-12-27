import { useState } from 'react'


// การทำfunction + แบบ counter 
const App = () => {
    const [counter, handleCounter] = useState(0) // ใช้เป็น Arrary
    
    return (
        <div>
            <h3>People is coming from the gate. Please count.</h3>
            <span>{counter}</span>
            &nbsp;
           <button
           onClick={() => {
            handleCounter(counter +1);
           }}>Counter(+)</button>
           <button
           onClick={() => {
            handleCounter(counter -1);
           }}>Counter(-)</button>
        </div>
    )
}

export default App

