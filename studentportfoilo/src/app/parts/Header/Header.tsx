import React from "react"
import "./css/index.css"


export default function Header() {
    return (<React.Fragment>
        <header className="Header">
            <h1 className="HeaderText">
                My portfilo
                <span className="first-line"> Temple</span>
                <span className="second-line"> Highschool </span>
            </h1>
            <p className="abtMe">Hello, I'm Riley Rager, a high school student</p>
        </header>
        
        </React.Fragment>
    )
}