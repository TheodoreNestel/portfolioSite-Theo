import React from "react"
import bemify2 from "../utility/bemify"
import aboutData from "../data/about.json"
import Card from "../components/Card"

const bem = bemify2("AboutPage");

//I dont think this needs more than this I could be wrong **


function AboutPage(props){
    return (
        <div className={bem()}>

            <Card {...aboutData}/>

        </div>
    )
}


export default AboutPage;