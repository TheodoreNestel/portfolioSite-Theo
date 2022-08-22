import React , {useState , useEffect} from "react"
import { useTransition } from "../THREEjs";



// Import Main SCSS Entry Point Stylesheet
import "../sass/main.scss"

// Import Page Components
import Space from "../components/Space"
import AboutPage from "../sitePages/AboutPage"
import ContactPage from "../sitePages/ContactPage"
import MainPage from "../sitePages/MainPage"
import ProjectPage from "../sitePages/ProjectPage"
import MagicButton from "../components/MagicButton"

import data from "../data/home.json"
import siteData from "../data/home.json"

console.log(data)

const pages = {
  AboutPage,
  ContactPage,
  MainPage,
  ProjectPage
} //we use this to keep all our pages in an object 



// markup this is where the "react app" is edited like we know how it works

//im dumping all current base level component to make sure they work 

const IndexPage = () => {
  const [page , setPage] = useState("MainPage") //we store our current page in state for magic button
  //that way we always know what page we are on and from there what other pages are available
  const Page = pages[page]; //this takes whatever page the useSate is holding and grabs the page object accordingly
  
  //THREEJS CAM ANIMATION CODE 
  //useTransition(page)
  
  

 
  return (
    <main>
      <Space/>
      
      <Page changePage={setPage} />

      <MagicButton currentPage={page} changePage={setPage}/>

      <img className="ringu" src="/newRingu.png"/>
      
    </main>
  )
}

export default IndexPage


//homework make the animation code less garbage and not duplicated 
//add it to all pages ! 


