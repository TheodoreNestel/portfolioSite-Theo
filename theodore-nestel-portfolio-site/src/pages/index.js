import React , {useState , useEffect ,useRef} from "react"



// Import Main SCSS Entry Point Stylesheet
import "../sass/main.scss"

// Import Page Components
import Space from "../components/Space"
import AboutPage from "../sitePages/AboutPage"
import ContactPage from "../sitePages/ContactPage"
import MainPage from "../sitePages/MainPage"
import ProjectPage from "../sitePages/ProjectPage"
import MagicButton from "../components/MagicButton"
import Ringu from '../components/Ringu'

//import the data files 
import data from "../data/home.json"

console.log(data)

const pages = {
  AboutPage,
  ContactPage,
  MainPage,
  ProjectPage
} //we use this to keep all our pages in an object 



//the top level component our index all our pages flow through this component 
const IndexPage = () => {
  const [page , setPage] = useState("MainPage") //we store our current page in state for magic button
  //that way we always know what page we are on and from there what other pages are available
  const Page = pages[page]; //this takes whatever page the useSate is holding and grabs the page object accordingly


 
 
 //we return the sitePage component stored in our state & our magic button / nav as well as the spinning ring 
 //and our canvas 
  return (
    <main >
      <Space/>
      
      <Page changePage={setPage} />

      <MagicButton currentPage={page} changePage={setPage}/>

      <Ringu currentPage={page}/>
     
    </main>
  )
}

export default IndexPage



