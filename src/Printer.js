import React from 'react'

export const Printer = () => {
    const[message, setMessage] = React.useState("")
    const[printedMessage, setPrintedMessage] = React.useState("")
    const[display, setDisplay] = React.useState(false)
    const[isDisabled, setIsDisabled ] = React.useState(true) 

    const handleChange = e => {
        setIsDisabled(false)
        setMessage(e.target.value)
    }
    const handleClick = e => {
        if(e.target.id === "print" && message !== ""){
            setPrintedMessage(message)
            setMessage("")
            setDisplay(true)
            setIsDisabled(true)
        }
    }
    return ( 
        <div style={{display: 'flex', flexDirection: 'column'}}>

            { display ? <h3>{printedMessage}</h3> : null }

            <input 
                type="text"
                placeholder="Type a message!"
                value={message}
                onChange={handleChange}
            />
            <button
                id="print" 
                onClick={handleClick}
                data-testid="print"
                disabled={isDisabled}
            >Print</button>
            
        </div>
    )
}
