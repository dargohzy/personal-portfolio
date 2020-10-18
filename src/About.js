import React from 'react'

import Title from './Title'

import ProfilePic from './images/profile-pic.png';
import './App.css';

function About() {

    const firstPara =
        "Hey there. I'm Daryl, and I'm based in Singapore. I'm currently a Y3 Computer Science undergraduate studying in the National University of Singapore.";

    const secondPara = 
        "As stated in the intro, I'm aspiring to work in the UX / Product design field. I'm also a fan of UI design. My drive comes in the creation" +
        "of a product that is able to exude a positive influence and experience for the end user. Ultimately, the end goal is to make a user happy, while helping" +
        "them at the same time.";

    const skills = [
        "Java / Object-Oriented Programming",
        "HTML & CSS",
        "React",
        "Figma",
        "Adobe XD",
        "Adobe Photoshop / Lightroom / Premiere Pro",
        "Photography & Videography",
        "GameMaker Studio 2 / GameMaker Language",
        "Mario Kart"
    ];

    return (
        <div className="about">
            <div>
                <Title id="page-title" name="About Me"/>
                <p>{firstPara}</p>
                <p>{secondPara}</p>
                {/* <p>
                    Currently, I'm still studying at the National University of Singapore.
                    In university, I've taken modules that have intrinsic value in giving me the experience in creating solutions for a problem.
                    Such modules include CS2103T, a software engineering project, as well as CS3240 and NM2213, which taught me interaction design principles and methods, in addition to equipping me with skills required for a UI/UX designer.
                </p> */}
                <div>
                    <div>Here are some skills that I've acquired so far:</div>
                    <ul>
                        <li>{skills[0]}</li>
                        <li>{skills[1]}</li>
                        <li>{skills[2]}</li>
                        <li>{skills[3]}</li>
                        <li>{skills[4]}</li>
                    </ul>
                </div>
                <div>
                    <div>Other miscellaneous skills:</div>
                    <ul>
                        <li>{skills[5]}</li>
                        <li>{skills[6]}</li>
                        <li>{skills[7]}</li>
                        <li>{skills[8]}</li>
                    </ul>
                </div>
            </div>
            <img src={ProfilePic}></img>
        </div>
    );
}

export default About