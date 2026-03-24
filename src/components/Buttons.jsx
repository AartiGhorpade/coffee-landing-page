import React from 'react'

const Buttons = ({ btnName, classes }) => {
    return (
        <button className={classes}>{btnName}</button>
    )
}

export default Buttons