import React from 'react'

export const Counter = () => {
    const[count, setCount] = React.useState(0)
    const[message, setMessage] = React.useState("")
    const[printedMessage, setPrintedMessage] = React.useState("")
    const[display, setDisplay] = React.useState(false)

    const handleClick = e => {
        if(e.target.id === "up"){
            setCount(count + 1)
        }
        if(e.target.id === "down"){
            if(count > 0){
               setCount(count - 1) 
            }
        }
        if(e.target.id === "print"){
            setPrintedMessage(message)
            setMessage("")
            setDisplay(true)
            
        }
    }

    const handleChange = e => {
        setMessage(e.target.value)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>{count}</h1>
            <button id="up" onClick={handleClick}>Up</button>
            <button id="down" onClick={handleClick}>Down</button>
            {display ? <h3>{printedMessage}</h3> : null }
            <input 
                type="text"
                placeholder="Message"
                value={message}
                onChange={handleChange}
            />
            <button id="print" onClick={handleClick}>Print</button>
        </div>
    )
}
