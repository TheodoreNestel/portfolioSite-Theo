import React from "react"
import bemify2 from "../utility/bemify";
import {LogoGithub , LogoReddit ,MailOutline } from "react-ionicons"

const bem = bemify2("icon")

const logos = {
    github : LogoGithub,
    reddit : LogoReddit,
    mail : MailOutline
}

function Icon({icon}){
    const Logo = logos[icon] //we use the string as a key to grab the correct icon downfall we need to add all the logos we want
    //to this object before we can use them 

    return(
        <>{Logo && <Logo height="var(--icon-size)" width="var(--icon-size)"/>}</>
    )
}


export default Icon;