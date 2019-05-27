import React from 'react';

function Picture_Display() {
    return (
        <div id="container">
        <p id="Title">Create & Inspire</p>
        <img id="logo" src={require("./mountain.svg")} />
        </div>
    )
}

export default Picture_Display;