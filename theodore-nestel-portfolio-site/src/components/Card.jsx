import React from "react";
import bemify2 from "../utility/bemify";

const bem = bemify2("card"); //this Function needs tweaking as the compiler doesnt like StartsWith()


//this card component is supposed to the all in one component for the site 

const Card = (...props) => { //this causes me to have to add props[0]. im sure there is a way to clean it up 
  //i just dont remember how **



  // This component takes string data and formats it into a card 
  //I have all the potential attributes I would want in my card and if those props are missing nothing is rendered

  console.log(props)

  //this is how we extract all our links this will need to be tweaked to be icons of social media and what not 


  if(props.links){ //if we have links in our props then we do this 
  let allLinks = props.links.map((link , index)=>{
    return <li key={index}><a href={link}>Icon Goes here</a></li> 
  })
  }
  //this will work to create our Li but I need a smart way to toggle it on and off in the actual component 
  

  //I understand that using this method all of these elements are created even when there is no data but
  //unless Im really missing something this should be a non issue as either bem can be used to hide them when no data is found
  //or it doesnt matter because they wont cause any visual difference if they have no data
  return (

    <div className={bem()}>
      <img src={props[0].props.img}/>
      <h1>{props[0].props.title}</h1>
      <h4>{props[0].props.cta}</h4>
      <p>{props[0].props.data}</p>
      <b>{props[0].props.email}</b> 
      {/* <ul>{allLinks}</ul> this gets mad when allLinks isnt define when no props are passed*/}
    </div>

  )

  



}


export default Card;