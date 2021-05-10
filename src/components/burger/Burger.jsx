import React from "react"

export const Burger = (props) => {
    return(
        <>
        {console.log(props)}
            <div>
                <button
                    className="hamburger-button"
                    aria-controls="global-nav" 
                    onClick={() => props.setOpen(!props.open)}
                >
                    <span className="hamburgerLine" aria-expanded={props.open}>
                        <span className="visuallyallHidden" aria-expanded={props.open}>
                        </span>
                    </span>
                </button> 
            </div>
        </>
    )
}