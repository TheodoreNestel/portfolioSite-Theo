
import React , { useState } from "react";
import bemify from "../utility/bemify";

const bem = bemify("test-form");


function Test(){
    

    const [value , setValue] = useState("");

    let canSubmit = !!value; //turns value into a bool 

   

   

    return (

        <div className={bem()}>

            <input 
                className={bem("input")}
                value={value} 
                type="text"
                onChange={(e)=>{setValue(e.target.value)}}
            />

            <button className={bem("button" , [!!value,"disabled"])}>Press Me</button>

        </div>

    )
}

export default Test;