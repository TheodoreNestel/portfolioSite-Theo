import React , {useState} from "react"



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
  const [page , setPage] = useState("MainPage")
  const Page = pages[page]; //this takes whatever page the useSate is holding and grabs the page object accordingly 
  
  console.log(page)
 
  return (
    <main>
      <Space/>
      
      <Page changePage={setPage} />

      <MagicButton currentPage={page} changePage={setPage}/>
      
    </main>
  )
}

export default IndexPage


// 1. Add Content to each page //added some content still not the final version but enough to see the css markup
// 2. Style each of the different pages //this was done to the best of my ability defo needs some more ccs practice 
// 3. Implement Navigation between pages
// 4. If you're feeling up to it, animate the transitions between pages



//Theo's ephiphany 
//buttons need to be on the index and permanent
//the direction the buttons take you should be based on //what page youre on


////Logic needed

//sate to keep track of the potential directions from movement 
//at main page three potention anywhere else one 
//load only the button and direction it needs to be located at by hiding all other buttons
//maybe call the buttons top left and right button and apply a disable effect when not in use 
//update state when a button is clicked to know where the user is and what directional button they have access to 
//state structure could be 
//{
//  location : thePageWeAreOn
//  directionPossible : [right , left , top , bot]
//}

//prject = left from main 
//contact = top from main 
//about = right from main 



//new solution 
//build a button component that does all the heavy lifting itll take the page as a prop and from there will build several buttons
//that will be added to the index page based on how many nav options there are 



//add move divs to change height on cards objects 