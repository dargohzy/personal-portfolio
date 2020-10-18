import React from 'react'

import './App.css'

function Title(props) {
    return (
        <div id="page-title">
            <h1>{props.name}</h1>
            <hr/>
        </div>
    )
}

export default Title