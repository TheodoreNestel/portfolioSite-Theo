import * as React from "react"

// styles
//we removed the inline styles in favor of stylesheet for the sake of code clarity 



// Import Main SCSS Entry Point Stylesheet
import "../sass/main.scss"

// Import Page Components
import Space from "../components/Space"
import Card from "../components/Card"



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
  img : "https://www.nicepng.com/png/detail/851-8517636_skin-element-http-i-imgur-com-t8thkso-girl.png",
  links: ["link1" , "link2" ,"Link3"]

}





// markup this is where the "react app" is edited like we know how it works

const IndexPage = () => {
  return (
    <main>
      <Space/>
      <Card props={portFolioData} />
    </main>
  )
}

export default IndexPage
