import React from 'react'

import './App.css';

function Intro() {
    const greetingStyle = {
        fontFamily: "Consolas",
        fontSize: "22px",
        color: "#6adebd"
    }

    const nameStyle = {
        fontFamily: "Arial",
        letterSpacing: "2px",
        color:"white",
        fontWeight: "700",
        fontSize: "80px",
    }

    const whoAmIStyle = {
        fontFamily: "Arial",
        fontWeight: "700",
        fontSize: "48px",
    }

    const descriptionStyle = {
        marginTop: "20px",
        width: "500px",
    }

    return (
        <div className="intro">
            <div style={greetingStyle}>Hi there, my name is</div>
            <div style={nameStyle}>Daryl Goh.</div>
            <div style={whoAmIStyle}>People call me Dargo :)</div>
            <div style={descriptionStyle}>
                Based in sunny Singapore, I'm a Y3 Computer Science undergraduate from NUS that's an aspiring UX / Product designer and frontend developer.
            </div>
        </div>
    )
}

export default Intro