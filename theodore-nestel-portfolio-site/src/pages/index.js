import * as React from "react"
import Helmet from "react-helmet" //arjun will hate this and tell me another way but this make my client cdn work 

// styles
//we removed the inline styles in favor of stylesheet for the sake of code clarity 



// Import Main SCSS Entry Point Stylesheet
import "../sass/main.scss"

// Import Page Components
import Space from "../components/Space"
import Card from "../components/Card"
import Image from "../components/Image"
import Cta from "../components/Cta"
import LinkOrb from "../components/LinkOrb"
import Icon from "../components/Icon"

import data from "../data/home.json"

console.log(data)



//data entries 
//i dont know how to link json and the internet isnt clear so Im going to make an obj here for now 

let mainPageData={
  title : "Thedore Nestel",
  cta : "Scroll to Explore"
}
let aboutPageData = {
  title : " About me",
  data : "Wowowow Im a super pogger developer and tottally not shit haha xp hire me plz"
}

let portFolioData = {
  title : "Name of that particula site",
  data : "blah blah this is the site I used so and so to to create it and it serves THIS purpose...",
  img : "https://i.pinimg.com/474x/31/38/fd/3138fd7f3c64f0b603b7cbb366901081.jpg",
  links: [{link:"link1" , img:"imgAsset.png" , title: "sampleTitle1"} , {link:"link2" , title: "sampleTitle2"},{email:"coolEmail@email"}]

}





// markup this is where the "react app" is edited like we know how it works

//im dumping all current base level component to make sure they work 

const IndexPage = () => {
  return (
    <main>
      <Space/>
      <Card title={portFolioData.title} data={portFolioData.data} />
      <Image image={portFolioData.img}/>
      <Cta cta="Scroll in any direction to explore" />
      <LinkOrb />

      <Icon icon="battery-full-outline" />

      <Helmet>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Helmet>
      
    </main>
  )
}

export default IndexPage
