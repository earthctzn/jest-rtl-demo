import React from 'react'

export const Counter = () => {

    const[count, setCount] = React.useState(0)

    const handleClick = e => {
        if(e.target.id === "up"){
            setCount(count + 1)
        }
        if(e.target.id === "down"){
            if(count > 0){
               setCount(count - 1) 
            }
        }
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>

            <h1>{count}</h1>

            <button 
                id="up" 
                onClick={handleClick}
                data-testid='up'
            >Up</button>
            
            <button 
                id="down" 
                onClick={handleClick}
                data-testid='down'
            >Down</button>

        </div>
    )
}
