import React from "react"
import bemify2 from "../utility/bemify"
import Card from "../components/Card";
import contactData from "../data/contact.json"

const bem = bemify2("page");

//I dont think this needs more than this I could be wrong **


function ContactPage(props){
    return (
        <div className={bem()}>

       <Card {...contactData} />

        </div>
    )
}


export default ContactPage;