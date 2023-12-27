import { useState } from 'react'

const App = () => {
    const [color, setColor] = useState()
    
    return (
        <>
            {color === 'yellow' && 
                <div style={
                    {
                        width: '150px', 
                        height: '150px', 
                        margin: '12px', 
                        background: 'yellow'
                    }
                }>YELLOW</div>
            }

            {color === 'blue' && 
                <div style={
                    {
                        width: '150px', 
                        height: '150px', 
                        margin: '12px', 
                        background: 'blue'
                    }
                }>BLUE</div>
            }

            {color === 'pink' && 
                <div style={
                    {
                        width: '150px', 
                        height: '150px', 
                        margin: '12px', 
                        background: 'pink'
                    }
                }>PINK</div>
            }

            <button onClick={() => setColor('yellow')}>Show Yellow</button>
            <button onClick={() => setColor('blue')}>Show Blue</button>
            <button onClick={() => setColor('pink')}>Show Pink</button>
        </>
    )
}

export default App

