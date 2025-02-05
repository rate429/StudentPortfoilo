import React from "react"
import Image from "next/image"
import logo from "../../../../public/temple-logo.png"
import "./css/index.css"


export default function Header() {
    return (<React.Fragment>
        <header className="Header">
            <Image src={logo} alt="temple logo" width={200}height={400}></Image>
            <h1 className="HeaderContent">
                Temple
                <span className="first-line">High School</span>
                
            </h1>
            <nav>
                <ul className="NavagationList">
                    <li className="NavBtn"><a href="#AboutMeID">About me</a></li>
                    <li className="NavBtn"><a href="#EducationID">Education</a></li>
                    <li className="NavBtn"><a href="#skillsID">Skills</a></li>
                    <li className="NavBtn"><a href="#projectid">Projects</a></li>
                    <li className="NavBtn"><a href="#footerid">Contact</a></li>


                </ul>
            </nav>
            
        </header>
        
        </React.Fragment>
    )
}