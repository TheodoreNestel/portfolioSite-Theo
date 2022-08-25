import React from "react"
import bemify2 from "../utility/bemify";
import {LogoGithub , LogoReddit ,MailOutline, LogoLinkedin, DocumentTextOutline } from "react-ionicons"



//All icons must be declared in the import before they are used 
//then added to the Logos object so our component can grab them and display them.

const bem = bemify2("icon")
const logos = {
    github : LogoGithub,
    reddit : LogoReddit,
    mail : MailOutline,
    linkedIn : LogoLinkedin,
    resume : DocumentTextOutline

}

function Icon({icon}){
    const Logo = logos[icon]//we grab the icon's string name in props so we can display it inside the component
    return(
        <>{Logo && <Logo height="var(--icon-size)" width="var(--icon-size)" color="currentColor"/>}</>
    )
}


export default Icon;