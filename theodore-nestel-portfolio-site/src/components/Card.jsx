import React from "react";
import bemify2 from "../utility/bemify";
import Icon from "./Icon"

const bem = bemify2("card"); 


//this card component is one of the basic building block its purpose is to display a title and some text data 

const Card = (props) => { 


  
  return (

    <div className={bem()}>
       {props.img && (
          <div className={bem("image")}>
            <img src={props.img} />
          </div>
        )}

       <div className={bem("main")}>
            <h3 className={bem("title")}>{props.title}</h3>
            <div className={bem("content")}>
              {Array.isArray(props.data) ? 
                props.data.map((d , index)=><p key={index}>{d}</p>) : <p>{props.data}</p>
            }
            </div>
            {props.links && (
              <ul className={bem("links")}>
                  {props.links.map((link , index)=> (
                    <li key={index}>
                      <a href={link.link} target="_blank"><Icon icon={link.icon}/></a>
                    </li>
                  ) )}
              </ul>
            )}
       </div>

    </div>

  )

}


export default Card;